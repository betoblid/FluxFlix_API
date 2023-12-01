const express = require("express");
const app = express();
const cors = require("cors");
const dbMovies = require("./control/function");

//functions usando na aplicação
app.use(cors());
app.use(express.json());
app.listen(3333);

const db = new dbMovies();

app.get("/movieslist", async (req, res) => {

    const { row } = req.query;
    if (typeof row !== "undefined" && row >= 1) {

        //fazendo um consulta, usando promise para validar os dados recebidos.
        await db.GetLimitMovies(Number(row))
            .then(response => res.status(200).json(response))
            .catch(err => res.status(404).json({ aviso: "Não é possivel encontrar os dados no momento"}))
    } else {
        res.json({aviso: "É obrigatorio passar row na url"})
    }
});

app.get("/movies", async (req, res) => {

    //fazendo um consulta, usando promise para validar os dados recebidos.
    await db.getmoives()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json({ aviso: "Não é possivel encontrar os dados no momento" }))
});

app.post("/movie", async (req, res) => {

    //desestruturando um object recebido do body na requisição.
    const { nome, id, plataforma, categoria } = req.body;

    //validando o acesso por meio de um token, futuro update usar node script ou token
    if (req.query.key === "ASGrfSDFDetrg233466767SDDF") {

        //validando se os dados existem
        if (typeof nome !== "undefined" && typeof id !== "undefined" && typeof plataforma !== "undefined" && typeof categoria !== "undefined") {

            //enviando os dados para o banco de dados
            //mensagem enviada ao front-end caso seja concluido ou a já erros.
            await db.postmovies(nome, id, plataforma, categoria)
                .then(response => res.status(201).json({ aviso: "Salvo com sucesso!!" }))
                .catch(err => res.status(500).json({ aviso: "Não foi possivel salvar" }))

        } else {
            //retornando um erro pro front-end, avisando que o body não foi enviado como esperado.
            res.status(400).json({ erro: "por favor envie o body como esperado" });
        }
    } else {
        //aviso que o token está invalido
        res.status(400).json({ erro: "Token invalido" });
    }
});
//para deletar usamos um params id que é enviado no Endpoint da api
app.delete("/", async (req, res) => {

    const { key, id } = req.query;
    //valida o acesso a api
    if (key === "ASGrfSDFDetrg233466767SDDF") {

        //verifica se o id enviado existe para que não ocorrar exclução dos dados por inteiro.
        if (typeof id !== "undefined") {
            //ação executada
            db.RemoveMovies(Number(id))
                //resposta para o front-end de sucesso ou erro.
                .then(response => res.status(200).json({ aviso: "Deletado com sucesso!!" }))
                .catch(err => res.status(400).json({ aviso: "No momento não é possivel Deletar o Filme" }))
        } else {
            //aviso que falta o id para que ocorra a ação.
            res.status(400).json({ aviso: "por favor envie o id" });
        }
    } else {
        //aviso que o token está invalido
        res.status(400).json({ erro: "Token invalido" });
    }
});

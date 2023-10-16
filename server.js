const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("./config/db");

//functions usando na aplicação
app.use(cors())
app.use(express.json())



app.get("/", async (req, res) => {

    //fazendo um consulta e salvando em uma variavel
    const consulta = await sql`SELECT * FROM filmes`;
    //enviando pro front os dados da cunsulta
    res.json(consulta)
})

app.post("/", async (req, res) => {

    //desestruturando um object recebido do body na requisição.
    const { nome, id, plataforma, categoria } = req.body;

    //validando o acesso por meio de um token, futuro update usar node crpt ou  token
    if (req.query.key === "ASGrfSDFDetrg233466767SDDF") {

        //validando se os dados existem
        if (typeof nome !== "undefined" && typeof id !== "undefined" && typeof plataforma !== "undefined" && typeof categoria !== "undefined") {

            //enviando os dados para o banco de dados
            const SalvarDados = await sql`INSERT INTO filmes(id_filme,nome,plataforma,categoria) VALUES(${id},${nome},${plataforma},${categoria})`;

            //mensagem enviada de sucesso pro front
            res.json({ aviso: "Salvo com sucesso!!" });
        } else {
            //returnando um erro pro front avisando que o body não foi enviado como o esperado
            res.json({ erro: "por favor envie o body como o esperado" });
        }
    } else {
        //aviso que o token está invalido
        res.json({ erro: "Token invalido" })
    }

})
//para deletar usamos um params id que é enviado no Endpoint da api
app.delete("/", async (req, res) => {

    //valida o acesso a api
    if (req.query.key === "ASGrfSDFDetrg233466767SDDF") {

        //verifica se o id enviado existe para que não ocorrar exclução dos dados por inteiro
        if (typeof req.query.id !== "undefined") {
            //ação executada
            const rest = await sql`DELETE FROM nome WHERE id = ${Number(req.query.id)}`
            //resposta para o front de sucesso
            res.json({aviso: "Deletado com sucesso!!"})
        }else{
            //aviso que falta o id para que ocorra a ação.
            res.json({ erro: "por favor envie o id" });
        }
    }else{
        //aviso que o token está invalido
        res.json({erro: "Token invalido"})
    }


})

app.listen(3001, () => {
    console.log("\n\nserve rodando \n\n")
})
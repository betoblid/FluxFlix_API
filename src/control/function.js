const sql = require("./db");

class dbMovies {

    async getmoives() {
        const response = await sql`SELECT * FROM filmes`
        return response
    }

    async postmovies(nome, id, plataforma, categoria) {
        //enviando os dados para o banco de dados
        const savefilme = await sql`INSERT INTO filmes(id_filme,nome,plataforma,categoria) VALUES(${id},${nome},${plataforma},${categoria})`  
        return savefilme
    }

    async RemoveMovies(id) {
        //ação executada
        const RemoveMovie = await sql`DELETE FROM nome WHERE id = ${Number(id)}`
        return RemoveMovie
    }

    async GetLimitMovies(row) {
        const response = await sql`SELECT id, id_filme, nome, plataforma, categoria FROM filmes LIMIT ${row}`
        return response
    }
};
module.exports = dbMovies;

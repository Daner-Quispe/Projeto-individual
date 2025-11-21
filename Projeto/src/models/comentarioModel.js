var database = require("../database/config")

function cadastrar(comentario, dtComentario, usuario_idUser, foto_idFoto) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, nickname, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO comentario (comentario, dtComentario, usuario_idUser, foto_idFoto) VALUES ('${comentario}', '${dtComentario}', '${usuario_idUser}', '${foto_idFoto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
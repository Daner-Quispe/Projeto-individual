var database = require("../database/config");

function comentar(comentario, idUsuario, idFoto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", comentario, idUsuario, idFoto);
    var instrucaoSql = `
        INSERT INTO comentario (comentario, usuario_idUser, foto_idFoto)
        VALUES ('${comentario}', ${idUsuario}, ${idFoto});
    `;

    console.log("Executando SQL:", instrucaoSql);

    return database.executar(instrucaoSql);
}

function listar(idFoto) {
    var instrucaoSql = `
    SELECT u.nickname, c.comentario, c.usuario_idUser, c.foto_idFoto
    FROM usuario u JOIN comentario c 
	ON u.idUser = c.usuario_idUser
    WHERE foto_idFoto = ${idFoto}
    ORDER BY dtComentario DESC;`;
    console.log("Executando SQL:", instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    comentar,
    listar
}
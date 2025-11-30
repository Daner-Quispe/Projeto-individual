var database = require("../database/config");

function verificarCurtida(idUsuario, idFoto) {
    var instrucaoSql = `
    SELECT * FROM curtida 
    WHERE usuario_idUser = ${idUsuario} AND foto_idFoto = ${idFoto};`
    console.log("Executando SQL:", instrucaoSql);

        return database.executar(instrucaoSql);
}


function curtir(idUsuario, idFoto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, idFoto);
    var instrucaoSql = `
        INSERT INTO curtida (usuario_idUser, foto_idFoto)
        VALUES (${idUsuario}, ${idFoto});
    `;
    console.log("Executando SQL:", instrucaoSql);
    
        return database.executar(instrucaoSql);
}

function descurtir(idUsuario, idFoto) {
    var instrucaoSql = `
    DELETE FROM curtida 
    WHERE usuario_idUser = ${idUsuario} AND foto_idFoto = ${idFoto};`
    console.log("Executando SQL:", instrucaoSql);

        return database.executar(instrucaoSql);
}

module.exports = {
    verificarCurtida,
    curtir,
    descurtir
}
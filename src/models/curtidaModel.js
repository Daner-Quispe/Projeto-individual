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

function contar(idFoto) {
    var instrucaoSql = `
    SELECT  COUNT(usuario_idUser) AS totalLikes FROM curtida 
    WHERE foto_idFoto = ${idFoto};
    `

        return database.executar(instrucaoSql);
}

function totalCurtida(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(cur.usuario_idUser) AS 'Total Curtida' FROM foto f 
    LEFT JOIN curtida cur ON cur.foto_idFoto = f.idFoto 
    WHERE f.usuario_idUser = ${idUsuario};
    `
        return database.executar(instrucaoSql);
}

function curtidaPorDia(idUsuario) {
    var instrucaoSql = `
    SELECT 
    DATE(cur.dtCurtida) AS 'Data', COUNT(cur.idCurtida) AS 'Curtidas' 
    FROM curtida cur JOIN foto f 
    ON f.idFoto = cur.foto_idFoto
    WHERE f.usuario_idUser = ${idUsuario}
    GROUP BY DATE(cur.dtCurtida)
    ORDER BY DATE(cur.dtCurtida);
    `;
        return database.executar(instrucaoSql);
}

module.exports = {
    verificarCurtida,
    curtir,
    descurtir,
    contar,
    totalCurtida,
    curtidaPorDia
}
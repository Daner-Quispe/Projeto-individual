var database = require("../database/config")

function listar() {
    var instrucao = `SELECT * FROM foto;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(foto) {
    var instrucao = `INSERT INTO foto (url, descricao, dtPostagem, usuario_idUser) VALUES ('${url}', '${descricao}', NOW(), '${usuario_idUser}');`;
    console.log("Executando a instrução SQ: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
}
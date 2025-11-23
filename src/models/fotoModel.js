const database = require("../database/config");

function salvar(foto) {
  const instrucao = `insert into foto (url, descricao, usuario_idUser) values ('${foto.imagem}', '${foto.descricao}', ${foto.id});`;

  return database.executar(instrucao);
}

function carregarFeed(id) {
  const instrucao = `select idFoto, url, descricao from foto`;

  return database.executar(instrucao);
}

module.exports = { salvar, carregarFeed }
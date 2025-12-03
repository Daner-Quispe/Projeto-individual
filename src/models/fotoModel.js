const database = require("../database/config");

function salvar(foto) {
  const instrucao = `insert into foto (url, descricao, usuario_idUser) values ('${foto.imagem}', '${foto.descricao}', ${foto.id});`;

  return database.executar(instrucao);
}

function carregarFeed() {
  const instrucao = `select idFoto, url, descricao from foto`;

  return database.executar(instrucao);
}

function totalFotos(idUsuario) {
  var instrucaoSql = `
  SELECT COUNT(idFoto) AS 'Fotos' FROM foto 
  WHERE usuario_idUser = ${idUsuario}
  `
  return database.executar(instrucaoSql)
}

module.exports = { salvar, carregarFeed, totalFotos }
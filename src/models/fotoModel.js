const database = require("../database/config");

function salvar(foto) {
  const instrucao = `insert into foto (url, descricao) values ('${foto.imagem}', '${foto.descricao}');`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from foto where id = ${id}`;

  return database.executar(instrucao);
}

module.exports = { salvar, buscarUsuarioPeloId }
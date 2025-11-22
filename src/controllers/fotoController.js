const fotoModel = require('../models/fotoModel');


function salvar(req, res) {
  const imagem = req.file.filename;

  const {descricao} = req.body

  const foto = { descricao, imagem }
  
  fotoModel.salvar (foto)
  .then(resultado => {
    res.status(201).send("foto criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarUsuarioPeloId(req, res) {
  console.log(req.params.id);
  usuarioModel.buscarUsuarioPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvar, buscarUsuarioPeloId }
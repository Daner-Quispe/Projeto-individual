const fotoModel = require('../models/fotoModel');


function salvar(req, res) {
  const imagem = req.file.filename;
  const id = req.body.id

  const {descricao} = req.body

  const foto = { descricao, imagem, id }
  
  fotoModel.salvar (foto)
  .then(resultado => {
    res.status(201).send("foto criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function carregarFeed(req, res) {
  console.log(req.params.id);
  fotoModel.carregarFeed(req.params.foto)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvar, carregarFeed }
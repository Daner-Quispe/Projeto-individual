const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const fotoController = require('../controllers/fotoController');

router.get("", (req, res) => {
  res.render("cards")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('foto'), (req, res) => {
  fotoController.salvar(req, res);
});

router.get('/listar', upload.single('foto'), (req, res) => {
  fotoController.carregarFeed(req, res);
});

router.get('/totalFoto/:idUsuario', function (req, res) {
  fotoController.totalFotos(req, res);
} )

module.exports = router;


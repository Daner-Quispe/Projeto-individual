var express = require('express');
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtirOuDescurtir/:idFoto", function (req, res) {
    curtidaController.curtirOuDescurtir(req, res)
});

router.get("/contar/:idFoto", function (req, res) {
    curtidaController.contar(req, res)  
});

router.get("/verificar/:idUsuario/:idFoto", function (req, res) {
    curtidaController.verificar(req, res)
});

router.get("/curtidaPorDia/:idUsuario", function (req, res) {
    curtidaController.curtidaPorDia(req, res)
})

router.get("/maiorCurtida/:idUsuario", function (req, res) {
    curtidaController.maiorCurtida(req, res)
})

module.exports = router;
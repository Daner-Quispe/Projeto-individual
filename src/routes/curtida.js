var express = require('express');
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtirOuDescurtir/:idFoto", function (req, res) {
    curtidaController.curtirOuDescurtir(req, res)
});


module.exports = router;
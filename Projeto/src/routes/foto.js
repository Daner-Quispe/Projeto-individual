var express = require("express");
var router = express.Router();

var fotoController = require("../controllers/fotoController")

router.post("/cadastrar", function (req, res) {
    //função a ser chamada quando acessar /foto/cadastrar
    fotoController.cadastrar(req, res)
});
router.get("/listar", function (req, res) {
    //função a ser chamada quando acessar /foto/listar
    fotoController.listar(req, res)
})

module.exports = router;
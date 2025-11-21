var fotoModel = require("../models/fotoModel");

function listar(req, res) {
    fotoModel.listar().then(function(resultado) {
        //precisamos informar que o resultado voltará para o font-end como uma respota em json
        res.status(200).json(resultado);
    }).catch(function (erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var url = req.body.urlServer;
    var descricao = req.body.descricaoServer;
    var usuario_idUser = req.body.usuario_idUserServer;
      
    fotoModel.cadastrar(url, descricao, usuario_idUser).then(function (respota){
        res.status(200).send("Foto criada com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}
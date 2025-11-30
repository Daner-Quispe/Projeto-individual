var curtidaModel = require("../models/curtidaModel");

function curtirOuDescurtir(req, res) {
    var idUsuario = req.body.idUsuario;
    var idFoto = req.params.idFoto;

    if (!idUsuario || !idFoto) {
        return res.status(400).send("Dados faltando");
    }

    console.log("ID Usuario:", idUsuario);
    console.log("ID Foto:", idFoto);

    curtidaModel.verificarCurtida(idUsuario, idFoto)
    .then(resultado => {
        if (resultado.length > 0) {
            return curtidaModel.descurtir(idUsuario, idFoto)
                .then(() => res.json({ status: "descurtido"}));
        } else {
            return curtidaModel.curtir(idUsuario, idFoto)
                .then(() => res.json({ status: "curtido"}));
        }
    })
    .catch(erro => {
        console.log("Erro no SQL:", erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function curtir(req, res) {
    var idUsuario = req.body.idUsuario;
    var idFoto = req.params.idFoto;

    if (!idUsuario || !idFoto) {
        return res.status(400).send("Dados faltando");
    }

    console.log("ID Usuario:", idUsuario);
    console.log("ID Foto:", idFoto);

    curtidaModel.curtir(idUsuario, idFoto)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro no SQL:", erro);
            res.status(500).json(erro.sqlMessage);
        });   
}

module.exports = {
    curtirOuDescurtir,
    curtir
}
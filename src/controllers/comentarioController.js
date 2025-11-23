var comentarioModel = require("../models/comentarioModel");

function comentar(req, res) {
    var comentario = req.body.comentario;
    var idUsuario = req.body.idUsuario;
    var idFoto = req.params.idFoto;

    console.log("Comentário:", comentario);
    console.log("ID Usuario:", idUsuario);
    console.log("ID Foto:", idFoto);

    if (!comentario) {
        return res.status(400).send("Comentário vazio!");
    }
    if (!idUsuario) {
        return res.status(403).send("ID Usuário não enviado!");
    }
    if (!idFoto) {
        return res.status(403).send("ID Foto não enviado!");
    }

    comentarioModel.comentar(comentario, idUsuario, idFoto)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro no SQL:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    comentar
}
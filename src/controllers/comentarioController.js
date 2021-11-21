var comentarioModel = require("../models/comentarioModel");

function testar(req, res) {
    console.log("ENTRAMOS NO comentarioController");
    res.send("ENTRAMOS NO COMENTARIO CONTROLLER");
}

function listar(req, res) {
    comentarioModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    comentarioModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    comentarioModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (titulo.trim() == ''){
        res.status(400).send("O título está vazio!");
    } else if (descricao.trim() == ''){
        res.status(400).send("A descrição está vazia")
    }
    else {
        comentarioModel.publicar(titulo, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res){
    var idComentario = req.params.idComentario;
    var idUsuario = req.params.idUsuario;

    comentarioModel.deletar(idComentario, idUsuario)
        .then(
            function(resultado){
                res.json(resultado);
                if(resultado.affectedRows == 0){
                    console.log("FUNÇÃO DE DELETAR NEGADA!")
                }else{
                    console.log("Post deletado com sucesso!");
                }
            }
        )
        .catch(
            function(erro){
                console.log(erro);
                console.log("Houve um erro ao deletar o comentario", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function gostar(req, res){
    var idCard = req.params.idCard;
    var idUsuario = req.params.idUsuario;

    comentarioModel.gostar(idCard, idUsuario)
        .then(
            function(resultado){
                res.json(resultado);
                console.log("Like dado com sucesso");
            }
        )
        .catch(
            function(erro){
                console.log(erro);
                console.log("Houve um erro ao dar like", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

function desgostar(req, res){
    var idCard = req.params.idCard;
    var idUsuario = req.params.idUsuario;

    comentarioModel.desgostar(idCard, idUsuario)
        .then(
            function(resultado){
                res.json(resultado);
                console.log("Deslike dado com sucesso");
            }
        )
        .catch(
            function(erro){
                console.log(erro);
                console.log("Houve um erro ao dar deslike", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )

}

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletar,
    gostar,
    desgostar
}
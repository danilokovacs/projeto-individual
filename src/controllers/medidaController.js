var medidaModel = require("../models/medidaModel");

function buscarLikes(req, res){
    
    medidaModel.buscarLikes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar likes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function verificarLikes(req, res){
    
    medidaModel.verificarLikes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar likes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarLikes,
    verificarLikes

}
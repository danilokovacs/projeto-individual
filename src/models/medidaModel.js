var database = require("../database/config");

function buscarLikes(idCard, idUsuario) {
    instrucaoSql = `select card.*, count(fkCard) as likes from curtidas join card on fkCard = id group by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarLikes
}
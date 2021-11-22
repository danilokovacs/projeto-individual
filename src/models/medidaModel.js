var database = require("../database/config");

function buscarLikes() {
    instrucaoSql = `select card.*, count(fkCard) as likes from curtidas join card on fkCard = id group by nome order by count(fkCard) desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarLikes() {
    instrucaoSql = `select * from curtidas`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarLikes,
    verificarLikes
}
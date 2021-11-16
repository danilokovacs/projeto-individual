create database danflix;

use danflix;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE comentario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(250),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
); 

CREATE TABLE card(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50)
);

CREATE TABLE curtidas (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkCard int,
    fkUsuario int,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    FOREIGN KEY (fkCard) REFERENCES card(id)
);

select * from usuario;

insert into usuario values
(null,'Vinicius','vinicius@bandtec.com','123456'),
(null,'Yan','yan@bandtec.com','123456'),
(null,'Augusto','augusto@bandtec.com','123456'),
(null,'Danilo','danilo@bandtec.com','123456');

select * from comentario;

insert into comentario values
(null,'BREAKING BAD > GAME OF THRONES','Breaking bad tem o final bom, já o game of thrones........... Mas enfim, sugiro você fazer uma análise do filme Intestellar!! ',1),
(null,'BLACK MIRROR','Melhor episódio de todos é o do jogo de terror ( Versão de testes )!!',2),
(null,'A SEGUNDA MELHOR SÉRIE DO MUNDO: GAMBITO DA RAINHA','A primeira é How I Met Your Mother, porque é bom, só o final que deixa a gente triste...',3);

-- SELECT PARA SABER QUEM COMENTOU
select u.id,
	u.nome,
    c.titulo,
    c.descricao,
    c.fkUsuario 
    from usuario as u 
    join comentario as c on u.id = c.fkUsuario;

select * from card;

insert into card values
(null,'Black Mirror'),
(null,'Ilha do Medo'),
(null,'Round 6'),
(null,'O Poço'),
(null,'Skins'),
(null,'Breaking Bad'),
(null,'How to Get Away With Murder'),
(null,'Como defender um assassino'),
(null,'Efeito Borboleta'),
(null,'3%'),
(null,'Rick e Morty');


select * from curtidas;

insert into curtidas values
(null,1,1), -- ID, FK CARD, FK USUARIO
(null,1,2),
(null,1,3),
(null,2,1),
(null,3,1),
(null,3,2);

-- SELECT MOSTRANDO QUAIS CARDS FORAM CURTIDOS
select c.*,u.id,u.nome
	from curtidas as curt 
	join usuario as u on u.id = curt.fkUsuario 
	join card as c on c.id = curt.fkCard; 

-- SELECT DE QUANTOS LIKES CADA CARD TEVE
select card.*,
	count(curtidas.id) as Likes
    from card join curtidas on fkCard = card.id
    group by card.id;
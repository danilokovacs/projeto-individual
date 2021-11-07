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
    descricao VARCHAR(150),
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
    FOREIGN KEY (fkCard) REFERENCES card(id),
    gostei int,
    desgostei int,
    check (gostei = 0 or gostei = 1),
    check (desgostei = 0 or desgostei = 1)
);

select * from usuario;

insert into usuario values
(null,'Danilo','danilo@bandtec.com','987654'),
(null,'Yan','yan@bandtec.com','123456');

select * from comentario;

insert into comentario values
(null,'Love, Death e Robots','É uma série muito boa, precisa ser acrescentada no site!!',1);

-- SELECT PARA SABER QUEM COMENTOU
select u.id,u.nome,c.titulo,c.descricao,c.fkUsuario from usuario as u join comentario as c on u.id = c.fkUsuario;

select * from card;

insert into card values
(null,'Ilha do Medo');

select * from curtidas;

-- INSERT, AVALIAÇÃO = 1 = LIKE
insert into curtidas values
(null,1,1,1,null),
(null,1,2,null,1),
(null,1,1,1,null),
(null,1,2,1,null);
-- É SÓ FAZER OS INSERTS COM NULL OU ESPECIFICAR O CAMPO AO CLICAR

-- SELECT MOSTRANDO QUAIS CARDS FORAM CURTIDOS E A AVALIAÇÃO
select c.*,u.id,u.nome,curt.* from curtidas as curt 
	join usuario as u on u.id = curt.fkUsuario 
		join card as c on c.id = curt.fkCard; 

-- SELECT DE QUANTOS LIKES O CARD TEVE
select card.*,count(curtidas.gostei) as likes from card join curtidas on fkCard = card.id where curtidas.gostei = 1;

-- SELECT DE QUANTOS LIKES E DESLIKES CADA CARD TEVE
select card.*,sum(curtidas.gostei) as Likes,sum(curtidas.desgostei) as Deslikes from card 
	join curtidas on fkCard = card.id;
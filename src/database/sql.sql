-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


/* para workbench - local - desenvolvimento */
create database blogamefla;
use blogamefla;

CREATE TABLE usuario(
idusuario INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(45),
nomeusuario VARCHAR(45),
senha VARCHAR(45),
confirmarsenha VARCHAR(45));

CREATE TABLE jogo(
idjogo INT PRIMARY KEY AUTO_INCREMENT,
jogo_1 VARCHAR(45),
jogo_2 VARCHAR(45)
);

CREATE TABLE pontuacao(
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idusuario),
fk_jogo INT,
FOREIGN KEY (fk_jogo) REFERENCES jogo(idjogo)
);
create database blogamefla;
use blogamefla;

CREATE TABLE usuario(
idusuario INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(45),
nomeusuario VARCHAR(45),
senha VARCHAR(45),
confirmarsenha VARCHAR(45));

CREATE TABLE pontuacoes(
idpontuacoes INT PRIMARY KEY AUTO_INCREMENT,
pontuacaoquiz VARCHAR(45),
pontuacaoqualjogador VARCHAR(45)
);

CREATE TABLE usuario_pontuacao(
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idusuario),
fk_pontuacoes INT,
FOREIGN KEY (fk_pontuacoes) REFERENCES pontuacoes(idpontuacoes)
);
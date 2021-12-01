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
FOREIGN KEY (fk_jogo) REFERENCES jogo(idjogo),
pontuacao INT,
diahora DATETIME
);

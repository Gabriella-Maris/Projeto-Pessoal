CREATE DATABASE futDelas;
USE futDelas;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf CHAR(11)
);

SELECT * FROM usuario;
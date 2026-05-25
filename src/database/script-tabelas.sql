CREATE DATABASE futDelas;
USE futDelas;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf CHAR(11),
    bairroUsuario VARCHAR(45)
);

CREATE TABLE escolinha(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    cnpj CHAR(14),
    bairro VARCHAR(45),
    rua VARCHAR(45),
    numero VARCHAR(45),
    nome_representante VARCHAR(45),
    email VARCHAR(45),
    cpf CHAR(11),
    senha VARCHAR(45)
);    

CREATE TABLE bairro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

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

CREATE TABLE busca (
	id INT PRIMARY KEY AUTO_INCREMENT,
    bairro VARCHAR(45)
);

INSERT INTO bairro (nome) VALUES
('Campanário'),
('Eldorado'),
('Centro'),
('Piraporinha'),
('Taboão'),
('Canhema'),
('Conceição'),
('Inamar'),
('Serraria'),
('Vila Nogueira'),
('Casa Grande');

SELECT * FROM usuario;
SELECT * FROM escolinha;

DESC usuario;

SELECT COUNT(bairro) 
FROM escolinha
JOIN usuario 
ON bairro = bairroUsuario
WHERE usuario.id = 7;

SELECT COUNT(id) 
FROM escolinha;

SELECT * FROM busca;

SELECT COUNT(bairro.id)
FROM bairro
LEFT JOIN escolinha
ON bairro.nome = escolinha.bairro
WHERE escolinha.id IS NULL;

SELECT bairro.nome, escolinha.bairro
FROM bairro
LEFT JOIN escolinha
ON bairro.nome = escolinha.bairro;
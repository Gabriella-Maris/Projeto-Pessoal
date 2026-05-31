CREATE DATABASE futDelas;
USE futDelas;

CREATE TABLE bairro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
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

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf CHAR(11),
    fkBairroUsuario INT,
    CONSTRAINT chFkBairroUsuario FOREIGN KEY (fkBairroUsuario) REFERENCES bairro (id)
);

CREATE TABLE escolinha(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    cnpj CHAR(14),
    rua VARCHAR(45),
    numero VARCHAR(45),
    nome_representante VARCHAR(45),
    email VARCHAR(45),
    cpf CHAR(11),
    senha VARCHAR(45),
    fkBairroEscola INT,
    CONSTRAINT chFkBairroEscola FOREIGN KEY (fkBairroEscola) REFERENCES bairro (id)
);    

CREATE TABLE busca (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkBairroBusca INT,
    CONSTRAINT chBairroBusca FOREIGN KEY (fkBairroBusca) REFERENCES bairro (id)
);

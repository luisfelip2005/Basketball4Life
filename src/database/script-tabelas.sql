-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE Basketball;

USE Basketball;

CREATE TABLE user (
	id_user INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
	height DECIMAL(3, 2),
	weight DECIMAL(5, 2)
);

CREATE TABLE training (
	id_training INT PRIMARY KEY AUTO_INCREMENT,
	starting_time TIME NOT NULL,
	ending_time TIME NOT NULL,
	trainig_date DATE NOT NULL,
	fk_user INT,
	FOREIGN KEY (fk_user) REFERENCES user(id_user)
);

CREATE TABLE weeklyGoal (
	id_goal INT PRIMARY KEY AUTO_INCREMENT,
	time_goal INT,
	qtd_weekly_goal INT,
	period_of_day VARCHAR(15),
	fk_user INT,
	FOREIGN KEY (fk_user) REFERENCES user(id_user)
);
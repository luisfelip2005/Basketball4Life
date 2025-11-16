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
	training_date DATE NOT NULL,
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

-- total of minutes in each day
CREATE VIEW vw_total_of_minutes_by_day AS
	SELECT DATE_FORMAT(training_date,'%d/%m/%Y') AS `_training_date`, fk_user, training_date,
		SUM(TIMESTAMPDIFF(MINUTE, starting_time, ending_time)) AS total_minutes 
		FROM training 
		GROUP BY training_date
        ORDER BY training_date;

-- total of minutes in each week
CREATE VIEW vw_total_of_minutes_by_week AS
	SELECT 
		YEARWEEK(training_date, 0) AS number_of_week, fk_user,
		SUM(TIMESTAMPDIFF(MINUTE, starting_time, ending_time)) AS total_minutes 
		FROM training GROUP BY number_of_week;

CREATE VIEW vw_percent_conclusion AS
	SELECT number_of_week, 
	t.fk_user,
    time_goal, 
    total_minutes, 
    round((total_minutes * 100) / time_goal) AS conclusion_percent 
    FROM vw_total_of_minutes_by_week AS t 
    JOIN weeklyGoal AS g ON g.fk_user = t.fk_user
    ORDER BY number_of_week ASC;
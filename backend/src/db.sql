CREATE DATABASE toolswappin;
CREATE TABLE users (
	id SERIAL,
	password VARCHAR (50) NOT NULL,
	email VARCHAR (100),
	area VARCHAR (50),
	name VARCHAR (50),
	photo TEXT,
	user_name VARCHAR (50) NOT NULL,
	PRIMARY KEY(id)
);
CREATE TABLE user_messages (
	id SERIAL,
	is_read BOOLEAN,
	message TEXT NOT NULL,
	id_sender INT NOT NULL,
	id_recipient INT NOT NULL,
	sent TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(id_sender) REFERENCES users(id),
	FOREIGN KEY(id_recipient) REFERENCES users(id)
);
CREATE TABLE tools (
	id SERIAL,
	name VARCHAR (50) NOT NULL,
	deposit DOUBLE,
	is_available BOOLEAN,
	area VARCHAR (50),
	borrower_id INT,
	owner_id INT NOT NULL,
	photo TEXT NOT NULL,
	borrowed DATE,
	returned DATE,
	PRIMARY KEY(id),
	FOREIGN KEY(owner_id) REFERENCES users(id),
	FOREIGN KEY(borrower_id) REFERENCES users(id),
	FOREIGN KEY(area) REFERENCES users(area)
);
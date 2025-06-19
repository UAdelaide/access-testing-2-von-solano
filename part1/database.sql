CREATE DATABASE IF NOT EXISTS textbook_marketplace;
USE textbook_marketplace;

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
);

CREATE TABLE books(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    ISBN VARCHAR(20) NOT NULL,
    price DECIMAL(10,2),
    location VARCHAR(100),
    available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY seller_id INT REFERENCES users(user_id),
);

CREATE TABLE authors(
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
);

CREATE TABLE book_authors(
    FOREIGN KEY book_id INT  REFERENCES book(user_id),
    FOREIGN KEY author_id INT REFERENCES users(user_id),

);
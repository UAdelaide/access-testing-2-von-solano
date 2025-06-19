CREATE DATABASE IF NOT EXISTS textbook_marketplace;
USE textbook_marketplace;

-- USERS TABLE
CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    location VARCHAR(100)
);

CREATE TABLE books(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT AUTO_INCREMENT REFERENCES users(user_id),
    title VARCHAR(100) NOT NULL,
    ISBN VARCHAR(20) NOT NULL,
    price DECIMAL(20,8),
    location VARCHAR(100),
    available BOOLEAN DEFAULT TRUE
);
CREATE DATABASE IF NOT EXISTS textbook_marketplace;
USE textbook_marketplace;

-- USERS TABLE
CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255),
    location VARCHAR(50)
);
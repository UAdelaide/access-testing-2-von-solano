CREATE DATABASE IF NOT EXISTS textbook_marketplace;
USE textbook_marketplace;

-- USERS TABLE
CREATE TABLE users(
    user_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),

);
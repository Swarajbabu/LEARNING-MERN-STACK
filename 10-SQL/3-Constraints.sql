-- Create a new database named "collage"
CREATE DATABASE collage;

-- Select the "collage" database to work on
USE collage;

-- Create a table named "emp"
CREATE TABLE emp(

    -- rollno column stores employee/student roll number
    -- UNIQUE means duplicate roll numbers are not allowed
    rollno INT UNIQUE,

    -- name column stores the name
    -- VARCHAR(30) means maximum 30 characters
    -- NOT NULL means name cannot be empty
    name VARCHAR(30) NOT NULL,

    -- age column stores age of the person
    age INT,

    -- fee column stores fee amount
    -- DEFAULT 25000 means if no value is given,
    -- automatically 25000 will be inserted
    fee INT DEFAULT 25000,

    -- CHECK constraint ensures age must be 18 or more
    CONSTRAINT age_checker CHECK (age >= 18)
);

-- Insert data into the emp table
INSERT INTO emp VALUES
(1, "Swaraj", 18, 256565);

-- Display all records from emp table
SELECT * FROM emp;
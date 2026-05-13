create database if not exists mysql_connecion_nodejs; 
use mysql_connecion_nodejs;
-- show tables;
-- show databases;

create table if not exists user(
    id varchar(50) primary key,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null
);

select * from user;

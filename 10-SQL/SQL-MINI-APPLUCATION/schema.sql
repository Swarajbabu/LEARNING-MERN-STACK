create database if not exists sqlmini;
use sqlmini;

create table if not exists user(
    id varchar(100) primary key,
    username varchar(50),
    email varchar(50),
    password varchar(50)
);

select * from user;


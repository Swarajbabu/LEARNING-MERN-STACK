create database if not exists collage;
use collage;

create table if not exists students_data(
	rollno int,
    name varchar(30),
    age int
);

insert into students_data values
(1,"Swaraj vecha",21),
(2,"Jayanth",13);

select * from students_data;
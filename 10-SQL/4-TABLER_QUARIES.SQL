create database college;
use college;

create table teacher(
	id int,
    name varchar(30),
    subject varchar(30),
    salary int
);

insert into teacher values
(23,"Ajay","Math",50000),
(47,"Bharath","english",60000),
(18,"chetan","che",45000),
(9,"divya","phy",75000);

select * from teacher;
select * from teacher where salary >55000;
alter table teacher change column salary ctc int;
update teacher set ctc = ctc + ctc * 0.25;
set SQL_SAFE_UPDATES = 0;

alter table teacher add column city varchar(50) default "HYD";
alter table teacher  drop column ctc;
show databases;
create database proceduree;
use proceduree;
Create table EMPP ( EMPNO numeric(4) not null, ENAME varchar(30) not null, JOB varchar(10), MGR numeric(4), HIREDATE date, SAL numeric(7,2), DEPTNO numeric(2) );
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1000,  'Manish' , 'SALESMAN', 1003,  '2020-02-18', 600,  30) ;
select * from EMPP;
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1001,  'Manoj' , 'SALESMAN', 1003,  '2018-02-18', 600,  30) ;
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1002 , 'Ashish', 'SALESMAN',1003 , '2013-02-18',  750,  30 );
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1004,  'Rekha', 'ANALYST', 1006 , '2001-02-18', 3000,  10);
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1005 , 'Sachin', 'ANALYST', 1006 ,  '2019-02-18', 3000, 10 );
Insert into EMPP (EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO ) values(1006,  'Pooja',  'MANAGER'  ,     null    , '2000-02-18' ,6000, 10 );
Create table dept (dno numeric(4) not null, dname varchar(10) not null,area varchar(30));
Insert into dept(dno,dname,area) values(10,'Store','Mumbai');
Insert into dept(dno,dname,area) values(20,'Purchase','Mumbai');
Insert into dept(dno,dname,area) values(30,'Store', 'Delhi');
Insert into dept(dno,dname,area) values(40,'Marketing','Pune');
Insert into dept(dno,dname,area) values(50,'Finance','Delhi');
Insert into dept(dno,dname,area) values(60,'Accounts','Mumbai');
select * from dept;
delimiter $$
CREATE PROCEDURE my_proc_IN (IN num1 INT,IN num2 int)
  BEGIN /* being of block*/
   declare sum,sub,mul,divison int; /* declaring variables sum,sub ,mul ,divison */
   set sum = num1+ num2; /*use to set the value of sum variable*/
   set sub = num1 - num2;
   set mul = num1* num2;
   set divison = num1/num2;
   select sum,sub,mul,divison; /*use to fetch data stored in sum,mul,divison*/
END$$ /*end of a block*/
call my_proc_in(10,20);
/*-----------------------------------------------------------------------------------------------*/

delimiter $$
create procedure my_proc(in var varchar(20)) /*syntax to create procedure */
begin /* to begin procedure */
select reverse(var); /* using reverse function to reverse string and using select command fetching data from reverse method*/
 end $$  /* end of procedure*/
call my_proc("Database");

/*------------------------------------------------------------------------------------------------*/

delimiter $$
create procedure my_proceee(in inte int)
begin
select distinct empno,ename,sal from empp order by sal desc limit inte;
end $$
call my_proc(5)


/*-------------------------------------------------------------------------------------------------------*/
delimiter $$
create procedure que4 ()
begin
create table emp_test1 (e_id int,e_name varchar(10),e_joining_date date);
select * from emp_test1;
desc emp_test1;
end $$
call que4();
show tables;
drop table emp_test1;
drop procedure que4;
/*--------------------------------------------------------------------------------------------------------------*/

delimiter $$
create procedure que5()
begin
Insert into dept(dno,dname,area) values(60,'Education','Pune');
select * from dept;
end $$
call que5();
/*-------------------------------------------------------------------------------------------------------------------*/

create procedure que6(in num int)
begin
declare value,square,cubes int;
set value=num;
set square=num*num;
set cubes=num*num*num;
select value,square,cubes;
end $$
call que6(2);

/*-------------------------------------------------------------------------------------------------------------------*/
delimiter $$
create procedure que7(out num int)
begin
declare value1 int default 5;
set num=value1;
end $$
call que7(@print);
drop procedure que7;
select @print;





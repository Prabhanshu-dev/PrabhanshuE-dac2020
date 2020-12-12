/*-------------------------------------------------------------------------------------------------------*/
delimiter $$
create function assg(num int) returns int
begin
declare res int default 1;
factorial : loop
if(num = 0) then
return res;
leave factorial;
end if;
set res=res * num;
set num=num - 1;
end loop;
end $$
select assg(5);
/*-----------------------------------------------------------------------------------------------------*/
delimiter $$
create function assg2(num int) returns varchar(20)
begin
declare count int default 2;
primenumber : loop
if(count > num)
then 
return "prime number";
leave primenumber;
elseif(num % count = 0 && num != count )
then
return "not prime";
leave prafulla;
else
set count=count + 1;
end if;
end loop;
end $$
select assg2(13);
drop function assg2;
/*------------------------------------------------------------------------------------------------*/
delimiter $$
create function assg3(num int) returns int
begin
declare yard int default 0;
declare foot int;
declare inch int;
declare rem1 int;
if((yard=num / 36) != 0)
then 
set yard=num;
set foot=0;
set inch=0;
end if;
return yard;
end $$
select assg3(12);
drop function assg3;
/*---------------------------------------------------------------------------------------------------------*/
create table emp(epm_name varchar(30),salary int,dept_no int);
insert into emp values('rahul',5000,1);
insert into emp values('mayank',10000,2);
insert into emp values('prabhanshu',20000,3);
insert into emp values('rishu',15000,4);
select * from emp;
/*--------------------------------------------------------------------------------------------------------*/
delimiter $$
create function assg4(num int) returns varchar(30)
begin
update emp set salary=salary+(salary*0.10) where dept_no = num;
return "update sucessfuly";
end $$

select assg4(3);
select * from emp;

/*-------------------------------------------------------------------------------------------------------*/
delimiter $$
create function USER_ANNUAL_COMP (p_eno int,p_coom int) returns int
begin
declare res int;
set res= (select salary from emp where dept_no=p_eno);
return (res + p_coom)*12;
end $$
select USER_ANNUAL_COMP(1,100);
/*--------------------------------------------------------------------------------------------------*/
delimiter $$
create procedure USER_QUERY_EMP (in p_myeno int,out p_myjob varchar(20),out p_mysal int)
begin
set p_myjob= (select epm_name from emp where dept_no=p_myeno);
set p_mysal= (select salary from emp where dept_no=p_myeno);
end $$
drop procedure USER_QUERY_EMP;
call USER_QUERY_EMP(2,@job,@salary);
select @job,@salary;
/*------------------------------------------------------------------------------------------------*/ 
delimiter $$
create procedure pr (inout str varchar(30))
begin
set str=reverse(str);
end $$
set @str="prafulla";
call pr(@str);
select @str;
drop procedure pr;
/*-----------------------------------------------------------------------------------------------*/
delimiter $$
create procedure tabledetails()
begin
show tables;
select * from emp;
end$$
call tabledetails();
drop  procedure tabledetails;



create database mysqlAssignment3;
use mysqlAssignment3;
show tables;
create table Ord_Master(Ord_no int,Cust_cd varchar(50) ,Stat char);
create table Ord_dtl(Ord_no int,Prod_cd char(6) ,Qty int);
create table Prod_Master(Prod_cd char(6),Prod_name varchar(35),Qty_in_stock int,Booked_qty int);
drop table ord_master;
drop table ord_dtl;
drop  table Prod_Master;
insert into Ord_Master(Ord_no,Cust_cd,Stat) values(1,"C1","P");
insert into Ord_dtl(Ord_no,Prod_cd,Qty) values(1,"P1",100);
insert into Ord_dtl(Ord_no,Prod_cd,Qty) values(1,"P2",200);
select* from Ord_Master;
select * from Ord_dtl;
insert into Prod_Master(Prod_cd,Prod_name,Qty_in_stock,Booked_qty) values("P1","floppies",10000,1000);
insert into Prod_Master(Prod_cd,Prod_name,Qty_in_stock,Booked_qty) values("P2","Printers",5000,600);
insert into Prod_Master(Prod_cd,Prod_name,Qty_in_stock,Booked_qty) values("P3","modems",3000,200);
select*from Prod_Master;
delimiter //
create trigger ad_temp before insert on Ord_dtl  for each row 
begin
update Prod_Master set Booked_qty = Booked_qty+new.Qty where Prod_cd=new.Prod_cd;
end //
insert into Ord_dtl values(1,'P3',400);

delimiter //
create trigger ad_temp before delete on Ord_dtl  for each row 
begin
update Prod_Master set Booked_qty = Booked_qty-old.Qty where Prod_cd=old.Prod_cd;
end //
delete from Ord_dtl where Prod_cd = 'P1';
drop trigger mysqlAssignment3.ad_temp;

create table dept_sal(dept_no int ,total_salary int);
create table emp( emp_name varchar(50));
insert into dept_sal values(1,5000);
insert into dept_sal values(2,52000);
insert into emp values('rahul');
insert into emp values('prabhanshu');
select * from emp;
select * from dept_sal;
delimiter //
create trigger ad_temp before insert on emp  for each row 
begin
update dept_sal set total_salary = total_salary+new.Prod_cd where Prod_cd=new.Prod_cd;
end //
insert into emp values('raju',400);


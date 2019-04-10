-- create database rollercoaster_db;
use yq47l0h0cilb0tqb;

create table coasters (
    id int(10) auto_increment not null,
    coaster_name varchar(255) not null,
    rode boolean default false,
    primary key(id)
);
drop Schema if exists LindeSensorData;
Create Database if NOT EXISTS  LindeSensorData;
Create USER if not exists acdc identified by 'acdc';
Grant ALL on LindeSensorData.* to acdc@localhost;
Grant ALL on LindeSensorData.* to acdc;

USE LindeSensorData;


/* JSON keys as defined in the arduino header file JSONKeys.h */
/* the columns in the database should have the sames names */
/*

*/

CREATE TABLE IF NOT EXISTS SensorValues
(
dbId int unsigned not null auto_increment UNIQUE, /* Datenbank ID */
time timestamp(3),
num integer NOT NULL,
pressure float,
runNumber integer,
runDescription varchar(256),
message varchar(256),
Primary Key (dbId),
Key(time)
) ;

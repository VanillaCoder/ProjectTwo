DROP DATABASE IF EXISTS cldb;
CREATE DATABASE cldb;

INSERT INTO categories (URL, title, text)
VALUES ("this is url", "coding", "a page about coding" );


INSERT INTO `cldb`.`Categories`
(
`URL`,
`title`,
`text`,
`createdAt`,
`updatedAt`)
VALUES
(
'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80',
'video game ',
' gamer ',
'2016-05-04 15:59:21 ',
'2016-05-04 15:59:21 ');

INSERT INTO `cldb`.`Categories`
(
`URL`,
`title`,
`text`,
`createdAt`,
`updatedAt`)
VALUES
(2 ,
'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80',
'video game ',
' gamer ',
'2016-05-04 15:59:21 ',
'2016-05-04 15:59:21 ');


INSERT INTO `cldb`.`Categories`
(
`URL`,
`title`,
`text`,
`createdAt`,
`updatedAt`)
VALUES
(2 ,
'https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80',
'video game ',
' gamer ',
'2016-05-04 15:59:21 ',
'2016-05-04 15:59:21 ');


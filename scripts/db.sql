CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tbl_task(
    id INT NOT NULL auto_increment,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

INSERT INTO tbl_task (title, description) VALUES
    ('task 1', 'some description'),
    ('task 2', 'some description 2'),
    ('task 3', 'some description 3');
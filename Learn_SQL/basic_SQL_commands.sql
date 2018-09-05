/* These are the basic SQL commands */

/* ALTER TABLE lets you add columns */
ALTER TABLE table_name
ADD column_name datatype;

/* AND is an operator that combines two conditions */
SELECT column_name(s)
FROM table_name
WHERE column_1 = value_1
AND column_2 = value_2;

/* Rename a column */
SELECT column_name AS 'Alias'
FROM table_name;

/* Averages the column */
SELECT AVG(column_name)
FROM table_name;

/* filter a result within a certain range */
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value_1 and value_2;

/* Create if-then logic */
SELECT column_name,
  CASE
    WHEN condition THEN 'Result_1'
    WHEN condition THEN 'Result_2'
    ELSE 'Result_3'
  END
FROM table_name;

/* Count the number of rows that are not null */
SELECT COUNT(column_name)
FROM table_name;

/* Create a table */
CREATE TABLE table_name (
  column_1 datatype,
  column_2 datatype,
  column_3 datatype
);

/* Delete rows from a table */
DELETE FROM table_name
WHERE some_column = some_value;

/* Group by arranges data into groups */
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name;

/* adding a conditional to a command */
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name
HAVING COUNT(*) > value;

/* combine rows from different tables IF the join condition is true */
SELECT column_name(s)
FROM table_1
JOIN table_2
  ON table_1.column_name = table_2.column_name;

/* Insert data */
INSERT INTO table_name (column_1, column_2, column_3)
/* It's not specified on the Codecademy page, but I believe the quotes
are for test and no quotes are for numbers */
VALUES (Value_1, 'value_2', value_3);

/* NULL means empty */
SELECT column_name(s)
FROM table_name
WHERE column_name IS NULL;

/* LIKE allows you to search for patterns */
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;

/* LIMIT specifies the number of rows returned */
SELECT column_name(s)
FROM table_name
LIMIT number;

/* MAX returns the largest value from a column */
SELECT MAX(column_name)
FROM table_name;

/* MIN returns the smallest value from a column */
SELECT MIN(column_name)
FROM table_name;

/* OR logic */
SELECT column_name
FROM table_name
WHERE column_name = value_1
  OR column_name = value_2;

/* sort returned items alphabetically or numerically */
SELECT column_name
FROM table_name
/* I believe the pipe and two choices is just showing options */
ORDER BY column_name ASC | DESC;

/* combine rows from different tables EVEN if condition is not met */
SELECT column_name(s)
FROM table_1
LEFT JOIN table_2
  ON table_1.column_name = table_2.column_name;

/* Round the values to specified # of decimal places */
SELECT ROUND(column_name, integer)
FROM table_name;

/* fetch data from a database */
SELECT column_name
FROM table_name;

/* select UNIQUE values */
SELECT DISTINCT column_name
FROM table_name;

/* SUM up values */
SELECT SUM(column_name)
FROM table_name;

/* edit rows from a table with the UPDATE statement */
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value;

/* filter results with WHERE */
SELECT column_name(s)
FROM table_name
WHERE column_name operator value;

/* create a temporary table to store results in using WITH */
WITH temporary_name AS (
  SELECT *
  FROM table_name)
SELECT *
FROM temporary_name
WHERE column_name operator value;

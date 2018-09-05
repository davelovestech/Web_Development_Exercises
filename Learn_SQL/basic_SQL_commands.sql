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

/*

/* selects all entries from table */
SELECT * FROM celebs;

/* CREATE a table */
CREATE TABLE celebs (
	id INTEGER,
  name TEXT,
  age INTEGER
);

/* Add a row to the table */
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 21);

/* view the table */
SELECT * FROM celebs;

/* adding three more entries to the table */
INSERT INTO celebs (id, name, age)
VALUES (2, 'Beyonce Knowles', 33);

INSERT INTO celebs(id, name, age)
VALUES (3, 'Jeremy Lin', 26);

INSERT INTO celebs (id, name, age)
VALUES (4, 'Taylor Swift', 26);

/* prints the name column from celebs table */
SELECT name FROM celebs;

/* edit a table row */
UPDATE celebs
SET age = 22
WHERE id = 1;
/* re-print the table */
SELECT * FROM celebs;

/* add a new column to the table */
ALTER TABLE celebs
ADD COLUMN
twitter_handle TEXT;
/* re-print the table */
SELECT * FROM celebs;

/* UPDATE the table w/ twitter handle */
UPDATE celebs
SET twitter_handle =
'@taylorswift13'
WHERE id = 4;

/* print table */
SELECT * FROM celebs;

/* delete unless has value for twitter */
DELETE FROM celebs
WHERE twitter_handle IS
NULL;
SELECT * FROM celebs;

/* Create a new table with constraints */
CREATE TABLE awards (
	id INTEGER PRIMARY KEY,
	recipient TEXT NOT NULL,
	award_name TEXT DEFAULT "Grammy"
);

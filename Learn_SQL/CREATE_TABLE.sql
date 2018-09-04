/* CREATE the table */
CREATE TABLE friends (
	id INTEGER,
  name TEXT,
  birthday DATE
);

/* INSERT into table */
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Jane Doe', '1990-05-30');

/* print current table */
SELECT * FROM friends;

/* Adding two new friends */
INSERT INTO friends (id, name, birthday)
VALUES (2, 'Chris', '1976-05-12');
INSERT INTO friends (id, name, birthday)
VALUES (3, 'Jeff', '1993-03-22');

/* print current table */
SELECT * FROM friends;

/* Update last name of Jane Smith. I could have used id instead of name */
UPDATE friends
SET name = 'Jane Smith'
WHERE name = 'Jane Doe';

/* print current table */
SELECT * FROM friends;

/* add 'email' column */
ALTER TABLE friends
ADD COLUMN
email TEXT;

/* give everyone an email address */
UPDATE friends
SET email = 'email_Jane@gmail.com'
WHERE id = 1;

UPDATE friends
SET email = 'chris@chris.net'
WHERE id = 2;

UPDATE friends
SET email = 'Jeff@jeff.net'
WHERE id = 3;

/* did it work? */
SELECT * FROM friends;

/* delete Jane Smith */
DELETE FROM friends
WHERE name = 'Jane Smith';

/* print the current table */
SELECT * FROM friends;

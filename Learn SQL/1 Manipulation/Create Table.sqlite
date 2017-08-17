CREATE TABLE friends (id INTEGER, name TEXT, birthday TEXT);
INSERT INTO friends (id, name, birthday) VALUES (1, 'Jane Doe', 'May 19th, 1993');
INSERT INTO friends (id, name, birthday) VALUES (2, 'Jack Sparrow', 'June 16th, 1994');
INSERT INTO friends (id, name, birthday) VALUES (3, 'Lucy Chavez', 'May 19th, 1994');
UPDATE friends 
SET name = 'Jane Smith'
WHERE id = 1;
ALTER TABLE friends ADD email TEXT;

UPDATE friends SET email = 'jdoe@example.com'
WHERE id = 1;

UPDATE friends SET email = 'jsparrow@example.com'
WHERE id = 2;

UPDATE friends SET email = 'lchavez@example.com'
WHERE id = 3;
DELETE FROM friends WHERE name IS 'Jane Smith';
SELECT * FROM friends;

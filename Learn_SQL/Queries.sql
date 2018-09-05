/* print the table */
SELECT * FROM movies;

/* select 2 individual columns
SELECT name, genre
FROM movies;
*/

/* select 3 individual columns */
SELECT name, genre, year
FROM movies;

/* print the table
SELECT * FROM movies;
*/
/* create an alias
SELECT name as 'thing'
FROM movies;
*/

/* create an alias for imdb_rating */
SELECT imdb_rating as 'IMDb'
FROM movies;

/* query for unique values
SELECT DISTINCT genre
FROM movies;
*/

/* query for unique values */
SELECT DISTINCT year
FROM movies;

/* find the bad movies, lol
SELECT * FROM movies
WHERE imdb_rating < 5;
*/

/* get movies after 2014 */
SELECT * FROM movies
WHERE year > 2014;

/* use LIKE and '_' wildcard character for partial matches */
SELECT *
FROM movies
WHERE name LIKE 'Se_en';

/* using LIKE again, but this time '%' wildcards
to grab matches on either side of 'man' string
*/
SELECT *
FROM movies
WHERE name LIKE '%man%';

/* using LIKE again, but this time '%' wildcards
to grab matches on either side of 'man' string

SELECT *
FROM movies
WHERE name LIKE '%man%';

select movies that beging with the word 'The'
*/
SELECT *
FROM movies
WHERE name LIKE 'The %';

/* find movies without a rating */
SELECT name
FROM movies
WHERE imdb_rating IS NULL;

/* select movies that begin with d-f
note that BETWEEN IS exclusive of end for letters

SELECT *
FROM movies
WHERE name BETWEEN 'D' AND 'G';
*/

/* select movies from the 70s ....
note that BETWEEN is inclusive of end for #s
I think this is silly to change syntax like this
*/
SELECT *
FROM movies
WHERE year BETWEEN 1970 and 1979;

/* movies released in 70s and imdb greater than 8
SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979
	AND imdb_rating > 8;
*/
SELECT *
FROM movies
WHERE year < 1985
	AND genre = 'horror';

  /* get movies after 2014 or that are action
  SELECT *
  FROM movies
  WHERE year > 2014
  	OR genre = 'action';
  */

  /* get romance or comedy movies */
  SELECT *
  FROM movies
  WHERE genre = 'romance'
  	OR genre = 'comedy';

/* get name & year + order by name
SELECT name, year
FROM movies
ORDER BY name;
*/

/* order by imdb_rating descending */
SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC;

/* return top 3 best movies */
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;

/* get movie names, return 'Chill' for romand
or comedy ... otherwise return 'Intense' */
SELECT name,
	CASE
  	WHEN genre = 'romance' THEN 'Chill'
    WHEN genre = 'comedy' THEN 'Chill'
    ELSE 'Intense'
  END AS 'Mood'
FROM movies;

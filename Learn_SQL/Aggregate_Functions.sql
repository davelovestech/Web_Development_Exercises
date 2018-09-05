/* print all
SELECT * FROM fake_apps;
*/
/* count how many apps are in the table
SELECT COUNT(*)
FROM fake_apps;
*/

/* add where clause to count how many free apps */
SELECT COUNT(*)
FROM fake_apps
WHERE price = 0;

/* what is total # of downloads from all apps? */
SELECT SUM (downloads)
FROM fake_apps;

/* least # of times app has been downloaded
SELECT MIN(downloads)
FROM fake_apps;
*/

/* get max price */
SELECT MAX(price)
FROM fake_apps;

/* what is ave downloads for all apps?
SELECT AVG (downloads)
FROM fake_apps;
*/

/* what is ave price for all apps? */
SELECT AVG (price)
FROM fake_apps;

/* get name and a rounded price column
SELECT name, ROUND(price, 0)
FROM fake_apps;
*/

/* get average price rounded to 2 decimal places */
SELECT ROUND(AVG(price), 2)
FROM fake_apps;

/* select prices, count them, and arrange by price
SELECT price, COUNT(*)
FROM fake_apps
GROUP BY price;
*/

/* select prices, count them, and arrange by price
WHERE downloads is more than 20K
SELECT price, COUNT(*)
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;
*/

/* calculate total # downloads for each category */
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;

/* How many movies have ratings rounded to 1-5?
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY ROUND(imdb_rating)
ORDER BY ROUND(imdb_rating);
*/

/* ^The above can be rewritten with column names
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;
*/

/* the exercise provides this query:
SELECT category,
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;
*/

/* rewrite the previous query w/ column names */
SELECT category,
	price,
  AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;

/* gets average downloads for each price
SELECT price,
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price;
*/

/* some prices are rare, so not interesting
cut uninteresting prices (10 or less) */
SELECT price,
	ROUND(AVG(downloads)),
	COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;

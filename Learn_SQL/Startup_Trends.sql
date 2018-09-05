/* check out the table */
SELECT * FROM startups;

/* how many companies are there? */
SELECT COUNT(*) FROM startups;

/* how much are the companies worth? */
SELECT SUM(valuation)
FROM startups;

/* what is the highest amount raised by a startup */
SELECT MAX(raised)
FROM startups;

/* get max raised by a startup during seed stage */
SELECT MAX(raised)
FROM startups
WHERE stage = 'Seed';

/* what is oldest company? */
SELECT MIN(founded)
FROM startups;

/* what is ave valuation? */
SELECT AVG(valuation)
FROM startups;

/* what is ave valuation of each category? */
SELECT category, AVG(valuation)
	FROM startups
  GROUP BY category;

/* what is valuation ave of each category, 2 dec round */
SELECT category, ROUND(AVG(valuation), 2)
	FROM startups
  GROUP BY category;

/* get valuation / category, 2 dec round, order DES */
SELECT category, ROUND(AVG(valuation), 2)
	FROM startups
  GROUP BY 1
  ORDER BY 2 DESC;

/* what is name of each category and # companies */
SELECT category, COUNT(*)
FROM startups
GROUP BY category;

/* what is name of each category and # companies
filter result to have >3 companies
*/
SELECT category, COUNT(*)
FROM startups
GROUP BY category
HAVING COUNT(*) > 3;

/* what is ave size of startup / location */
SELECT location, AVG(employees)
FROM startups
GROUP BY location;

/* what is ave size of startup / location
where ave size > 500
*/
SELECT location, AVG(employees)
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;

/* get the first 10 results from Flights */
SELECT *
FROM Flights
LIMIT 10;

/* subquery example:
limit the previous query to return airports
> 2000 feet
*/
SELECT *
FROM flights
WHERE origin in (
    SELECT code
    FROM airports
    WHERE elevation > 2000);

/* subquery example:
limit the previous query to return airports
LESS THAN 2000 feet
*/
SELECT *
FROM flights
WHERE origin in (
    SELECT code
    FROM airports
    WHERE elevation < 2000);

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

/* subquery example:
return airports where fac_type is SEAPLANE_BASE
SELECT *
FROM flights
WHERE origin in (
    SELECT code
    FROM airports
    WHERE fac_type = 'SEAPLANE_BASE');
*/

/* subquery for faa_region being ASO */
SELECT *
FROM flights
WHERE origin in (
		SELECT code
  	FROM airports
  	WHERE faa_region = 'ASO'
);

/* use subquery
get average total distance flown by
day of week and month */
SELECT a.dep_month,
       a.dep_day_of_week,
       AVG(a.flight_distance) AS average_distance
  FROM (
        SELECT dep_month,
              dep_day_of_week,
               dep_date,
               sum(distance) AS flight_distance
          FROM flights
         GROUP BY 1,2,3
       ) a
 GROUP BY 1,2
 ORDER BY 1,2;

 /*
I ran both of these to figure out the upcoming
query
this specifically looks at the distance col
SELECT id, distance FROM flights;
this grabs everything
SELECT * FROM flights;
 */
/*
Select flights that are below the average distance
the outer query gets flights and distance
the inner query computes the average distance
for all flights by that carrier
*/
SELECT id
FROM flights AS f
  WHERE distance < (
  SELECT AVG(distance)
  FROM flights
  WHERE carrier = f.carrier);

/*
obviously this prints evertying ... I wanted
to double check what's up
SELECT * FROM flights;
*/
/*
this query selects flights by carrier,
and generates the sequence #. It assumes
that flight #s are sequential.
SELECT carrier, id,
    (SELECT COUNT(*)
FROM flights f
WHERE f.id < flights.id
AND f.carrier=flights.carrier) + 1
 AS flight_sequence_number
FROM flights;
*/
/*
this views flights by origin, flight id, and
generates the sequence #
*/
SELECT origin, id,
    (SELECT COUNT(*)
FROM flights f
WHERE f.id < flights.id
AND f.origin=flights.origin) + 1
 AS flight_sequence_number
FROM flights;

/* check out the three tables */
SELECT * FROM trips;
SELECT * FROM riders;
SELECT * FROM cars;
/* primary keys:
trips: id
riders: id
cars: id
*/

/* cross join riders and cars
... this is not useful ... combining all
cars with all people, lol
*/
SELECT riders.first,
	riders.last,
  cars.model
FROM riders, cars;

/* create trip log of trips and users
... this has SOOOO many columns!!! */
SELECT *
FROM trips
LEFT JOIN riders
  ON trips.rider_id = riders.id;

/* trip log again (trips and users),
but now it's got columns selected */
SELECT trips.date,
   trips.pickup,
   trips.dropoff,
   trips.type,
   trips.cost,
   riders.first,
   riders.last,
   riders.username
FROM trips
LEFT JOIN riders
  ON trips.rider_id = riders.id;

/* link trips and the cars used */
SELECT *
FROM trips
JOIN cars
  ON trips.car_id = cars.id;

/* collect the riders table and riders2 tables */
SELECT *
FROM riders
UNION
SELECT *
FROM riders2;

/* avg cost of each trip */
SELECT ROUND(AVG(cost), 2)
FROM trips;

/* used REBU less than 500 times */
SELECT *
FROM riders
WHERE total_trips < 500
UNION
SELECT *
FROM riders2
WHERE total_trips < 500;

/* how many cars are active? */
SELECT COUNT(*)
FROM cars
WHERE status = 'active';

/* which two cars are most used */
SELECT *
FROM cars
ORDER BY trips_completed DESC
LIMIT 2;

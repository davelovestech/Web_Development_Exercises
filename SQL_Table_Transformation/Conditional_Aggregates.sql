/*
COUNT the number of rows from flights table
*/
SELECT COUNT(*) FROM flights;

/*
IS NOT NULL returns values that aren't null!
this query grabs not null values where the
destination is ATL
*/
SELECT COUNT(*) FROM flights
WHERE arr_time IS NOT NULL
AND destination = 'ATL';

/*
SQL CASE is if, then, else programming logic
this returns low for elevation under 500,
medium for between 500-1999, and High for
>= 2000 w/ ELSE returning Unknown
*/
SELECT
    CASE
        WHEN elevation < 500 THEN 'Low'
        WHEN elevation BETWEEN 500 AND 1999 THEN 'Medium'
        WHEN elevation >= 2000 THEN 'High'
        ELSE 'Unknown'
    END AS elevation_tier
    , COUNT(*)
FROM airports
GROUP BY 1;

/*
SQL CASE is if, then, else programming logic
this returns low for elevation under 250,
medium for between 250-1749, and High for
>= 1750 w/ ELSE returning Unknown
*/
SELECT
    CASE
        WHEN elevation < 250 THEN 'Low'
        WHEN elevation BETWEEN 250 AND 1749 THEN 'Medium'
        WHEN elevation >= 1750 THEN 'High'
        ELSE 'Unknown'
    END AS elevation_tier
    , COUNT(*)
FROM airports
GROUP BY 1;

/*
count low elevation airports <1000
*/
SELECT    state,
    COUNT(CASE WHEN elevation < 1000 THEN 1 ELSE NULL END) as count_low_elevation_aiports
FROM airports
GROUP BY state;

/*
checking out the first 10 rows of the table
SELECT * FROM flights
LIMIT 10;
*/
/*
sum total flight distance and compare to flight
distance for specific airline (UA here)
SELECT origin, sum(distance) as total_flight_distance, sum(CASE WHEN carrier = 'UA' THEN distance ELSE 0 END) as total_united_flight_distance
FROM flights
GROUP BY origin;
*/
/*
get total flight distance and origin flight
distance for delta
*/
SELECT origin, sum(distance) as total_flight_distance, sum(CASE WHEN carrier = 'DL' THEN distance ELSE 0 END) as total_delta_flight_distance
FROM flights
GROUP BY origin;

/*
get % flight distance from United by origin airport
SELECT     origin,
    100.0*(sum(CASE WHEN carrier = 'UN' THEN distance ELSE 0 END)/sum(distance)) as percentage_flight_distance_from_united FROM flights
GROUP BY origin;
*/
/*
get % flight distance from Delta by origin airport
*/
SELECT     origin,
    100.0*(sum(CASE WHEN carrier = 'DL'
      THEN distance ELSE 0 END)/sum(distance))
      as percentage_flight_distance_from_delta
      FROM flights
GROUP BY origin;

/* look at airports small table
SELECT * FROM airports
LIMIT 10;
check out specifically elevations
SELECT elevation FROM airports
LIMIT 10;
*/
/*
get percentage of >= 2000 airports by state
*/
SELECT state, 100.0 *
sum(CASE WHEN elevation >= 2000 THEN 1 ELSE 0 END) / count(*)
as percentage_high_elevation_airports
FROM airports GROUP BY state;

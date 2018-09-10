/*
Select ten rows from the bakeries table.
*/
SELECT * FROM bakeries
LIMIT 10;

/*
returns date and time for baked_goods
SELECT DATETIME(manufacture_time)
FROM baked_goods;
*/
/*
get date and time for deliveries in baked_goods
*/
SELECT DATETIME(delivery_time)
FROM baked_goods;

/*
previous queries looked at DATETIME, which
covers down to the second. This query looks at
DATE. It counts baked_goods made same day

SELECT DATE(manufacture_time), count(*) as count_baked_goods
FROM baked_goods
GROUP BY DATE(manufacture_time);
*/
/*
alternatively, looking at time. Times aren't listed.
Only dates, so it's either 0 or NULL.
SELECT TIME(manufacture_time), count(*) as count_baked_goods
FROM baked_goods
GROUP BY TIME(manufacture_time);
*/
/*
get the # of baked goods by delivery date
*/
SELECT DATE(delivery_time), COUNT(*) AS
count_baked_goods
FROM baked_goods
GROUP BY DATE(delivery_time);

/*
this grabs the production time and the
inspection time for bakery goods
SELECT DATETIME(manufacture_time), DATETIME(manufacture_time, '+2 hours', '30 minutes', '1 day') as inspection_time
FROM baked_goods;
*/
/*
what does the table look like?
SELECT * FROM baked_goods;
*/
/*
get package_time from delivery_time
it's + 5 hours 20 minutes and 2 days
*/
SELECT DATETIME(delivery_time, '+5 hours', '20 minutes', '2 days')
as package_time
FROM baked_goods;

/* checkout the table
SELECT * FROM baked_goods LIMIT 10;
*/
/* round ingredients cost to 4 decimal places
as roudned_cost
SELECT ROUND(ingredients_cost, 4) as rounded_cost
FROM baked_goods;
*/
/*
get distance from market, round 2 decimal places
*/
SELECT ROUND(distance, 2)
as distance_from_market
FROM bakeries;

/* checking out the table
SELECT * FROM baked_goods LIMIT 10;
*/
/* determine cost of ingredients and packaging
for each id in baked_goods
SELECT id, MAX(ingredients_cost, packaging_cost)
FROM baked_goods;
SELECT id, MAX(cool_down_time, cook_time)
FROM baked_goods;
*/
/* get shortest time for each item */
SELECT id, MIN(cool_down_time, cook_time)
FROM baked_goods;

/* checking out the table
SELECT * FROM bakeries LIMIT 10;
*/
/* combine first and last names from bakeries table */
SELECT first_name || ' ' || last_name
as full_name FROM bakeries;

/* checkin out the table
SELECT * FROM baked_goods LIMIT 10;
*/
/* looking at specifically ingredients
SELECT ingredients FROM baked_goods LIMIT 10;
*/
/* replace 'enriched_flour' with 'flour'
*/
SELECT
REPLACE(ingredients,'enriched_flour','flour')
FROM baked_goods;

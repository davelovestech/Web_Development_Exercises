/* looking at three tables */
SELECT *
FROM orders
LIMIT 5;

SELECT *
FROM subscriptions
LIMIT 5;

SELECT *
FROM customers
LIMIT 5;

/* join orders table and subscriptions table
select all columns */
SELECT *
FROM orders
JOIN subscriptions
	ON orders.subscription_id =
  subscriptions.subscription_id;

/* only join where description is Fashion Magazine */
SELECT *
FROM orders
JOIN subscriptions
	ON orders.subscription_id =
  subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

/* count the rows of newspaper */
SELECT COUNT(*)
FROM newspaper;

/* count the rows of online newspaper */
SELECT COUNT(*)
FROM online;

/* check out the tables of interest
SELECT *
FROM newspaper
LIMIT 10;

SELECT *
FROM online
LIMIT 10;
*/

/* join newspaper and online table by id */
SELECT COUNT(*)
FROM newspaper
JOIN online
	ON newspaper.id = online.id;

  /* left join newspaper table and online table
  by id */
  SELECT *
  FROM newspaper
  LEFT JOIN online
    ON newspaper.id = online.id;

  /* add a where clause to get rid of online.id
  values */
  SELECT *
  FROM newspaper
  LEFT JOIN online
    ON newspaper.id = online.id
  WHERE online.id IS NULL;

  /* inner join of classes and students */
  SELECT *
  FROM classes
  JOIN students
  	ON classes.id = students.class_id;

/* coutn the # of customers subscribed to
newspaper during march */
SELECT COUNT(*)
FROM newspaper
WHERE start_month <= 3
  AND end_month >= 3;

/* select all columns from the cross join
of newspaper and months
*/
SELECT *
FROM newspaper
CROSS JOIN months;

/* restrict previous queries to matching month */
SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >=month;

/* count subscribers over each month  */
SELECT month,
  COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month
GROUP BY month;

/* union combine newspaper and online */
SELECT *
FROM newspaper
UNION
SELECT *
FROM online;

/*
place this query inside a with statement
and run as previous_query
SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id
*/

WITH previous_query AS (
   SELECT customer_id,
      COUNT(subscription_id) AS 'subscriptions'
   FROM orders
   GROUP BY customer_id
)
SELECT customers.customer_name,
   previous_query.subscriptions
FROM previous_query
JOIN customers
  ON previous_query.customer_id = customers.customer_id;

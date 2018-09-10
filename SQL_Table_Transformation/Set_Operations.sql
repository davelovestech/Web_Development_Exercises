/*
select 10 rows from the new_products table
*/
SELECT * FROM new_products
LIMIT 10;

/*
use union to left-right combine ALL products
from legacy_products and new_products
*/
SELECT brand FROM legacy_products
UNION
SELECT brand FROM new_products;

/*
combine id and price from different tables
gets total count of all items
SELECT count(*) FROM (
  SELECT id, sale_price FROM order_items
  UNION ALL
  SELECT id, sale_price FROM order_items_historic) as a;
*/
/*
use a subquery to get avg sale price from
old and new tables
*/
SELECT id, avg(a.sale_price) FROM (
  SELECT id, sale_price FROM order_items
  UNION ALL
  SELECT id, sale_price FROM order_items_historic) AS a
  GROUP BY 1;

/*
intersect returns ONLY if rows from first
and second part match
*/
SELECT category from new_products
INTERSECT
SELECT category from legacy_products;

/*
EXCEPT is the opposite of intersect
it returns ONLY if rows from first
and second part DO NOT match
*/
SELECT category from new_products
EXCEPT
SELECT category from legacy_products;

/*
EXCEPT is the opposite of intersect
it returns ONLY if rows from first
and second part DO NOT match
order matters. Here it grabs only if in legacy
*/
SELECT category from legacy_products
EXCEPT
SELECT category from new_products;

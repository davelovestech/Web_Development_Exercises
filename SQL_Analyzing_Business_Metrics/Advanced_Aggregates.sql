/* select every from orders and order by id
select *
from orders
order by id
limit 100;
*/
/* select all columns from order_items */
select *
from order_items
order by id
limit 100;

/* get timestamps from ordered_at */
select date(ordered_at)
from orders
order by 1
limit 100;

/* count the # of rows from 'orders' table
select count(1)
from orders;
*/
/* checkout table
SELECT * from orders LIMIT 10;
*/
/* coutn and group orders by dates 'ordered_at'
note that group by 1 is shorthand for
group by date(ordered_at) and
order by date(ordered_at) */
select date(ordered_at), count(1)
from orders
group by 1
order by 1;

/*
how much money does SpeedySpoon make / day?
changing earlier daily count to get rounded sum
of amount_paid AND joining on orders.id
select date(ordered_at), round(sum(amount_paid), 2)
from orders
    join order_items on
      orders.id = order_items.order_id
group by 1
order by 1;
*/
/* changing the previous query to sum the $ made
from a single item. This case is 'kale-smoothie' */
select date(ordered_at), round(sum(amount_paid), 2)
from orders
    join order_items on
      orders.id = order_items.order_id
where name = 'kale-smoothie'
group by 1
order by 1;

/* how is kale smoothie doing compared to
other items for sales?
get name and amount_paid rounded 2 decimal places
*/
select name, round(sum(amount_paid), 2)
from order_items
group by name
order by 2 desc;

/*
what is the percentage of daily revenue from items?
*/
select name, round(sum(amount_paid) /
  (select sum(amount_paid) from order_items) * 100.0, 2) as pct
from order_items
group by 1
order by 2 desc;

/*
how much does each category make per day?
use if, else, then logic (CASE) to create categories
create percentage of daily revenue
*/
select
  case name
    when 'kale-smoothie'    then 'smoothie'
    when 'banana-smoothie'  then 'smoothie'
    when 'orange-juice'     then 'drink'
    when 'soda'             then 'drink'
    when 'blt'              then 'sandwich'
    when 'grilled-cheese'   then 'sandwich'
    when 'tikka-masala'     then 'dinner'
    when 'chicken-parm'     then 'dinner'
    else 'other'
  end as category, round(1.0 * sum(amount_paid) /
    (select sum(amount_paid) from order_items) * 100, 2) as pct
from order_items
group by 1
order by 2 desc;

/* calculate the reorder rate for each item */
select name, round(1.0 * count(distinct order_id) /
  count(distinct orders.delivered_to), 2) as reorder_rate
from order_items
  join orders on
    orders.id = order_items.order_id
group by 1
order by 2 desc;

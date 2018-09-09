/* checkout 10 rows of purchases
select *
from purchases
order by id
limit 10;
*/
/* checkout 10 rows of gameplays */
select *
from gameplays
order by id
limit 10;

/* get sum of prices for each day */
select
  date(created_at),
  round(sum(price), 2)
from purchases
group by 1
order by 1;

/* this is the same query as above BUT
now refunds are excluded */
select
  date(created_at),
  round(sum(price), 2) as daily_rev
from purchases
where refunded_at IS NULL
group by 1
order by 1;

/* coutn daily active users for mineblocks */
select
  date(created_at),
  count(distinct user_id) as dau
from gameplays
group by 1
order by 1;

/* count daily active users for mineblocks
for each platform.
*/
select
  date(created_at), platform,
  count(distinct user_id) as dau
from gameplays
group by 1, 2
order by 1, 2;

/*
get average revennue per purchasing user ARPPU
select date, sum of price / distinct user rounded
to 2 decimal places w/ NO refunds
*/
select
  date(created_at),
  round(sum(price) / count(distinct user_id), 2) as arppu
from purchases
where refunded_at is null
group by 1
order by 1;

/* common table expressions use a WITH clause
*/
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
)
select * from daily_revenue order by dt;

/* how much is the company making per player
per day? */
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
),
daily_players as (
  select
    date(created_at) as dt,
    count(distinct user_id) as players
  from gameplays
  group by 1
)
select
  daily_revenue.dt,
  daily_revenue.rev / daily_players.players
from daily_revenue
  join daily_players using (dt);

/* how much is the company making per player
per day? */
with daily_revenue as (
  select
    date(created_at) as dt,
    round(sum(price), 2) as rev
  from purchases
  where refunded_at is null
  group by 1
),
daily_players as (
  select
    date(created_at) as dt,
    count(distinct user_id) as players
  from gameplays
  group by 1
)
select
  daily_revenue.dt,
  daily_revenue.rev / daily_players.players
from daily_revenue
  join daily_players using (dt);

/* calculate retention
select
  date(created_at) as dt,
  user_id
from gameplays as g1
order by dt
limit 100;
*/
/* join gameplays on itself to get gameplays
from each player for each of their gameplays */
select
  date(g1.created_at) as dt,
  g1.user_id
from gameplays as g1
  join gameplays as g2 on
    g1.user_id = g2.user_id
order by 1
limit 100;

/* determine the total users for current day
and also the retained users from yesterday */
select
  date(g1.created_at) as dt,
  count(distinct g1.user_id) as total_users,
  count(distinct g2.user_id) as retained_users
from gameplays as g1
  LEFT JOIN gameplays as g2 on
    g1.user_id = g2.user_id
    and date(g1.created_at) = date(datetime(g2.created_at, '-1 day'))
group by 1
order by 1
limit 100;

/* calculate retention for each day */
select
  date(g1.created_at) as dt,
  round(100 * count(distinct g2.user_id) /
    count(distinct g1.user_id)) as retention
from gameplays as g1
  left join gameplays as g2 on
    g1.user_id = g2.user_id
    and date(g1.created_at) = date(datetime(g2.created_at, '-1 day'))
group by 1
order by 1
limit 100;

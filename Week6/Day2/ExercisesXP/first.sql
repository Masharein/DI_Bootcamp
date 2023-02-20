-- All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price_item ASC;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items
ORDER BY price_item DESC WHERE price_item >= 80;
-- -- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT * FROM customers
ORDER BY first_name ASC LIMIT(3);
-- -- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers
ORDER BY last_name DESC;
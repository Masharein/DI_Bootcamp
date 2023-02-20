-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name FROM customer;
-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer;
-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC;
-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone FROM address WHERE district = 'Texas';
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id = 15 OR film_id = 150; 
-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, release_year, rental_rate FROM film WHERE title = 'Alien';
--  No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, release_year, rental_rate FROM film WHERE title LIKE 'Al%';
-- Write a query which will find the 10 cheapest movies.
SELECT * FROM film ORDER BY rental_rate ASC LIMIT(10);
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
SELECT title, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;
-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT customer.first_name, customer.last_name,payment.payment_date, payment.amount
FROM customer 
INNER JOIN payment 
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film.title
FROM film 
INNER JOIN inventory
ON film.film_id != inventory.film_id
-- Write a query to find which city is in which country
SELECT city.city, country.country
FROM city 
INNER JOIN country 
ON city.country_id = country.country_id




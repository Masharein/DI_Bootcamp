-- CREATE TABLE actors (
--     actor_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL, 
--     last_name VARCHAR (25) NOT NULL, 
--     date_birth DATE NOT NULL,
--     number_oscars SMALLINT DEFAULT 0
-- )

-- -- select all columns from the table
-- SELECT * FROM actors;

-- -- SELECT first_name, last_name FROM actors;

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('George', 'Clooney', '1999-01-08', 2);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Matt', 'Damon', '1987-01-22', '3');

-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Jenifer', 'Aniston', '1987-01-22');

-- --condition
-- SELECT * FROM actors WHERE number_oscars >= 2;

-- -- select all the columns where nb > 2 and last name start with the D case INSENSITIVE
-- SELECT * FROM actors WHERE number_oscars >= 2 AND last_name ILIKE 'd%';

-- -- select only the actors that are born in 1987
-- SELECT * FROM actors WHERE EXTRACT(YEAR from date_birth) = 1987;

-- SELECT first_name, last_name, EXTRACT(YEAR from age(date_birth)) FROM actors;

-- SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars ASC;

-- SELECT * FROM actors LIMIT 2;

-- -- the actor that has the maximum number of oscars
-- SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars DESC LIMIT 1;


-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Jenyfer', 'ABC', '1999-01-08', 2),
-- ('Lea', 'ABC', '1999-01-08', 2)

-- -- Retrieve everything from the table actors
-- SELECT * FROM actors;

-- -- The first 4 actors
-- SELECT * FROM actors LIMIT 4;
-- -- The first 4 actors ordered in descending order of the last_name
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- --The actors that have the letter 'e' in their first_name
-- SELECT * FROM actors WHERE first_name ILIKE '%e%';
-- -- The actors that got at least 5 oscars
-- SELECT * FROM actors WHERE number_oscars >= 2;

-- UPDATE actors SET number_oscars = number_oscars + 1 WHERE actor_id = 1;

-- SELECT * FROM actors;

-- UPDATE actors 
-- SET last_name = 'DEF' 
-- WHERE actor_id = 5
-- RETURNING *; --show all he columns of the record that was changed

-- DELETE FROM actors WHERE first_name='Lea'

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('John', 'ABC', '1999-01-08', 2)
-- RETURNING *;

-- -- AS means ALIAS - shown temporarily as date_of_birth
-- SELECT date_birth AS date_of_birth FROM actors;
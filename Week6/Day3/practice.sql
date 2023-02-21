CREATE TABLE cars (
  car_id SERIAL PRIMARY KEY,
  brand VARCHAR(30) NOT NULL,
  color VARCHAR(30) NOT NULL,
  owner_id INTEGER UNIQUE REFERENCES actors (actor_id) -- unique column
);

INSERT INTO cars (brand, color, owner_id)
VALUES ('BMW', 'blue', (SELECT actor_id FROM actors WHERE last_name='Portman')),
('Jaguar', 'red', (SELECT actor_id FROM actors WHERE last_name='Clooney'))
RETURNING *

INSERT INTO cars (brand, color, owner_id)
VALUES ('Ferrari', 'yellow', (SELECT actor_id FROM actors WHERE last_name='Portman'))
RETURNING *

-- ERROR:  duplicate key value violates unique constraint "cars_owner_id_key"
-- DETAIL:  Key (owner_id)=(4) already exists.
-- SQL state: 23505

-- see all the actors AND all the cars that are owned
SELECT brand, color, last_name
FROM actors
LEFT JOIN cars
ON actors.actor_id = cars.owner_id
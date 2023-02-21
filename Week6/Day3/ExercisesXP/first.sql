-- Get a list of all film languages.
SELECT name FROM language;
-- Get a list of all films joined with their languages – select the following details : film title, 
-- description, and language name. 
SELECT film.title, film.description, language.name 
FROM film 
INNER JOIN language 
ON film.language_id = language.language_id 
-- Try your query with different joins:
-- Get all films, even if they don’t have languages.
SELECT title FROM film  
-- Get all languages, even if there are no films in those languages.
SELECT name FROM language
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
     id INTEGER NOT NULL PRIMARY KEY,
	 name VARCHAR (50) NOT NULL
  ); 
  INSERT INTO new_film 
  VALUES (1, 'Mad Max'),
  (2, 'Pink Panter');
  SELECT * FROM new_film
-- Create a new table called customer_review, which will contain film reviews that customers will make. 
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review(
     review_id INTEGER PRIMARY KEY,
	 film_id INTEGER NOT NULL,
	 language_id INT NOT NULL,
	 title TEXT NOT NULL,
	 score INT CHECK (score BETWEEN 1 AND 10),
	 review_text TEXT NOT NULL,
	 last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	 FOREIGN KEY (film_id) REFERENCES new_film (id),
	 FOREIGN KEY (language_id) REFERENCES language (language_id)
  ); 
 -- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Great movie!', 9, 'I really enjoyed this movie. The acting was great and the plot was very engaging.', CURRENT_TIMESTAMP);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (2, 2, 'Muy buena pelicula', 8, 'Me encanto esta pelicula. La trama es muy interesante y los actores son fantasticos.');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
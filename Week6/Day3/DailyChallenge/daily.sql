-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE Customer_profile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INTEGER REFERENCES Customer(id)
);
-- Insert those customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive
INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');
-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in
INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John')),
       (false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));
-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT Customer.first_name
FROM Customer
INNER JOIN Customer_profile ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isLoggedIn = true;
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT Customer.first_name, Customer_profile.isLoggedIn
FROM Customer
LEFT JOIN Customer_profile ON Customer.id = Customer_profile.customer_id
-- The number of customers that are not LoggedIn
SELECT COUNT(*)
FROM Customer
WHERE id NOT IN (SELECT customer_id FROM Customer_profile WHERE isLoggedIn = true);
-- Part II:
-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);
-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');
-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INTEGER CHECK (age <= 15)
);
-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
INSERT INTO Student (name, age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);
-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables 
-- : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE Library (
  book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);
-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE name = 'John'),
        '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
        (SELECT student_id FROM Student WHERE name = 'Bob'),
        '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE name = 'Lera'),
        '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
        (SELECT student_id FROM Student WHERE name = 'Bob'),
        '2021-08-12');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM Library;
-- Select the name of the student and the title of the borrowed books
SELECT student.name, book.title
FROM Student
JOIN Library ON student.student_id = library.student_fk_id
JOIN Book ON book.book_id = library.book_fk_id;
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(student.age)
FROM Student
JOIN Library ON student.student_id = library.student_fk_id
JOIN Book ON book.book_id = library.book_fk_id
WHERE book.title = 'Alice In Wonderland';
-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student
WHERE name = 'John';

SELECT * FROM student
SELECT * FROM library
SELECT * FROM book

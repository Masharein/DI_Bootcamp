// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
const allBooks = [
    {
        title: 'The Da Vinci Code',
        author: 'Den Brown',
        image: 'https://upload.wikimedia.org/wikipedia/ru/7/7d/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D0%BE%D0%B4_%D0%B4%D0%B0_%D0%92%D0%B8%D0%BD%D1%87%D0%B8.jpeg',
        alreadyRead: true
    }, 
    {
        title: 'Le Petit Prince',
        author: 'Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry',
        image: 'https://books.google.co.il/books/publisher/content?id=MumaEAAAQBAJ&hl=ru&pg=PP1&img=1&zoom=3&sig=ACfU3U30tGMZibFviFjPzAawbB9aQa4-XA&w=1280',
        alreadyRead: false,
    }
]
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
// Get the container div
const container = document.querySelector('.listBooks');
const table = document.createElement('table');
const header = document.createElement('thead');
const headerRow = document.createElement('tr');
const titleHeader = document.createElement('th');
titleHeader.textContent = 'Title';
const authorHeader = document.createElement('th');
authorHeader.textContent = 'Author';
const imageHeader = document.createElement('th');
imageHeader.textContent = 'Image';
headerRow.appendChild(titleHeader);
headerRow.appendChild(authorHeader);
headerRow.appendChild(imageHeader);
header.appendChild(headerRow);

const body = document.createElement('tbody');
allBooks.forEach(book => {
const row = document.createElement('tr');

// Title
const title = document.createElement('td');
title.textContent = book.title;

// Author
const author = document.createElement('td');
author.textContent = book.author;

// Image
const image = document.createElement('td');
const img = document.createElement('img');
img.src = book.image;
img.style.width = '100px';
image.appendChild(img);

// Set color based on read status
if (book.alreadyRead) {
row.style.color = 'red';
}

row.appendChild(title);
row.appendChild(author);
row.appendChild(image);
body.appendChild(row);
});

// Add header and body to the table
table.appendChild(header);
table.appendChild(body);

// Add table to the container
container.appendChild(table);




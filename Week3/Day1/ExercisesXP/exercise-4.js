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
        autor: 'Den Brown',
        image: 'https://upload.wikimedia.org/wikipedia/ru/7/7d/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D0%BE%D0%B4_%D0%B4%D0%B0_%D0%92%D0%B8%D0%BD%D1%87%D0%B8.jpeg',
        alreadyRead: true
    }
    {
        title: 'Le Petit Prince',
        autor: 'Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry',
        image: 'https://books.google.co.il/books/publisher/content?id=MumaEAAAQBAJ&hl=ru&pg=PP1&img=1&zoom=3&sig=ACfU3U30tGMZibFviFjPzAawbB9aQa4-XA&w=1280',
        alreadyRead: false,
    }
]
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
const myBooks = ['The Da Vinci Code', 'Le Petit Prince']
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

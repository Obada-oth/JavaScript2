/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element

  const ulElement = document.createElement('ul');
  const bookList = document.getElementById('bookList');
  const header = document.querySelector('h1');
  header.style.textAlign = 'center';

  bookList.appendChild(ulElement);

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookLi = document.createElement('li');
    const p = document.createElement('p');

    p.textContent = book.title + ' - ' + book.author;
    if (book.alreadyRead === false) {
      bookLi.style.backgroundColor = 'red';
    } else {
      bookLi.style.backgroundColor = 'green';
    }
    const image = document.createElement('img');

    image.setAttribute('src', book.imgURL);
    image.setAttribute('width', '150');
    image.setAttribute('height', '200');
    image.style.display = 'block';
    image.style.margin = 'auto';
    bookLi.style.listStyle = 'none';
    bookLi.style.width = '30%';
    bookLi.style.display = 'inline-block';
    bookLi.style.margin = '1em';
    p.style.textAlign = 'center';
    bookLi.appendChild(image);
    ulElement.appendChild(bookLi);
    bookLi.appendChild(p);
  }
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    imgURL: 'https://miro.medium.com/max/500/1*Qo27inBKBKY4Q4Pgk5KkbQ.png',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg',
  },
];
const ulElement = createBookList(books);

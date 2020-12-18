/* initialize constant variables */
let myLibrary = [];
let newBook;

/* information for the form and span */
const bookFormDiv = document.getElementById('formAddBook-container');

const closeForm = document.getElementsByClassName('close')[0];
closeForm.addEventListener('click', () => bookFormDiv.style.display = 'none');

/* event listeners for buttons */
const newBtn = document.querySelector('#btnNewBook');
newBtn.addEventListener('click', () => bookFormDiv.style.display = 'block');

const addBtn = document.querySelector('#btnFormSubmit');
addBtn.addEventListener('click', addBook);


function Book(title, author, pages, read) {
    this.title = formAddBook.title.value;
    this.author = formAddBook.author.value;
    this.pages = formAddBook.pages.value;
    this.read = formAddBook.read.value;
}

function addBook() {
    event.preventDefault();
    bookFormDiv.style.display ='none';

    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);

    formAddBook.reset();
}
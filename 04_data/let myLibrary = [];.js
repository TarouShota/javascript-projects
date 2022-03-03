let myLibrary = [];


function Book(title, author, pages, state) {
    this.title = title
    this.author = author
    this.pages = pages
    this.state = state
    //this.book = (`${title} by ${author}, ${pages} pages, ${state}`)
}

Book.prototype = {
    addBookToLibrary: function () {
        myLibrary.push(this)
    }
}


const got = new Book('Game of Thrones', 'Allah', 295, 'not read yet');
const aot = new Book('attack on titan', 'kageyama', 245, 'not read yet')
//const berserk = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));




const bookShelf = document.querySelector('.book-shelf');
const bookTitle = document.querySelector('.book-title');


const bookAuthor = document.querySelector('.book-author');
const bookPages = document.querySelector('.book-pages');



const bookState = document.querySelector('.book-state');

const btn = document.querySelector('#btn');
btn.onclick = () => {
    const berserk = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
    bookTitle.textContent = berserk.title;
    bookAuthor.textContent = berserk.author;
    bookPages.textContent = berserk.pages;
    bookState.textContent = berserk.state;



};

got.addBookToLibrary()
console.log(myLibrary);

aot.addBookToLibrary();
console.log(myLibrary);

console.log(got);

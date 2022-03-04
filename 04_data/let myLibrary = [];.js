let myLibrary = [];


const bookShelf = document.querySelector('.book-shelf');
const bookTitle = document.querySelector('.book-title');


const bookAuthor = document.querySelector('.book-author');
const bookPages = document.querySelector('.book-pages');



const bookState = document.querySelector('.book-state');

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
        bookTitle.textContent = this.title;
        bookAuthor.textContent = this.author;
        bookPages.textContent = this.pages;
        bookState.textContent = this.state;
    }
}



const got = new Book('Game of Thrones', 'Allah', 295, 'not read yet');
const aot = new Book('attack on titan', 'kageyama', 245, 'not read yet')
//const berserk = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
got.addBookToLibrary();
console.log(myLibrary);
aot.addBookToLibrary()




const btn = document.querySelector('#btn');
btn.onclick = () => {
    const newBook = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
    newBook.addBookToLibrary()
};

got.addBookToLibrary()
console.log(myLibrary);

aot.addBookToLibrary();
console.log(myLibrary);

console.log(got);

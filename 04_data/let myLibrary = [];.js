let myLibrary = [];

const wholeSection = document.querySelector('.whole-section')
const bookShelf = document.querySelector('.book-shelf');
const bookTitle = document.querySelector('.book-title');
const bookSection = document.querySelector('.book-section');



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
        let div = document.createElement('div');
        let ul = document.createElement('ul');

        for (i = 1; i < 5; i++) {
            let list = document.createElement('li');
            ul.appendChild(list);
        }
        div.appendChild(ul);
        wholeSection.append(div);
        let lists = ul.children;

        /* 
 */
        lists[0].textContent = this.title;
        lists[1].textContent = this.author;
        lists[2].textContent = this.pages;
        lists[3].textContent = this.state;
    }
}



const got = new Book('Game of Thrones', 'Allah', 295, 'not read yet');
const aot = new Book('attack on titan', 'kageyama', 245, 'not read yet')
//const berserk = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
console.log(myLibrary);




try {
    const btn = document.querySelector('#btn');
    btn.onclick = () => {
        const newBook = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
        newBook.addBookToLibrary()
    };
} catch {
    console.log('eei')
}


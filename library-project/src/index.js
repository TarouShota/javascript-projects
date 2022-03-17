import _ from 'lodash';
import { myLibrary, wholeSection, bookShelf, bookTitle, bookSection, bookAuthor, bookPages, bookState, counter } from './definingVariables.js';
import { Book } from './classes.js';
import printMe from './print.js';

//import './style.css'




function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.textContent = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());


const got = new Book('Game of Thrones', 'Allah', 295, 'not read yet');

const aot = new Book('attack on titan', 'kageyama', 245, 'not read yet')
//const berserk = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
console.log(myLibrary);




try {
    const btn = document.querySelector('#btn');
    btn.onclick = () => {
        const newBook = new Book(prompt("Book Title:"), prompt('The Author:'), prompt('Pages:'), prompt("have u already read it?"));
        newBook.addBookToLibrary();
    };
} catch {
    console.log('eei')
}





import {
  myLibrary,
  wholeSection,
  bookShelf,
  bookTitle,
  bookSection,
  bookAuthor,
  bookPages,
  bookState,
  counter,
} from "./definingVariables.js";
let test = new Book('12', '3', 4, 5);

class Book {
  constructor(title, author, pages, state) {
    this.title = title;
    this.author = author;

    this.pages = pages;
    this.state = state;
  }

  addBookToLibrary() {
    let div = document.createElement("div");
    let ul = document.createElement("ul");

    for (let i = 0; i < 4; i++) {
      let list = document.createElement("li");
      ul.appendChild(list);
      console.log("SUUi");
    }
    div.appendChild(ul);
    wholeSection.append(div);
    let lists = ul.children;

    lists[0].textContent = this.title;
    lists[1].textContent = this.author;
    lists[2].textContent = this.pages;
    lists[3].textContent = this.state;
  }
  //this.book = (`${title} by ${author}, ${pages} pages, ${state}`)
}

export {
  Book,
  myLibrary,
  wholeSection,
  bookShelf,
  bookTitle,
  bookSection,
  bookAuthor,
  bookPages,
  bookState,
  counter,
  test
};

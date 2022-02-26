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


console.log(got.addBookToLibrary());
console.log(myLibrary);

console.log(aot.addBookToLibrary());
console.log(myLibrary);
console.log(got);


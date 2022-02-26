let myLibrary = [];
function Book(title,author,pages,state){
    this.title = title
    this.author = author
    this.pages = pages
    this.state = state
    this.info = function(){
        return(`${title} by ${author}, ${pages} pages, ${state}`)
    }
}
Book.prototype ={
    addBookToLibrary: function () {
        return this.author
    }
}
const got = new Book('Game of Thrones','Allah', 295, 'not read yet');
console.log(got.info());
console.log(got.addBookToLibrary());


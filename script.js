// Array for books
const library = [];

// Constructor function for book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
};

const sampleBook = new Book("Atomic Habits", "James Clear", 310, true);

console.log(sampleBook);


function addBookToLibrary(book) {
    library.push(book);
};

addBookToLibrary(sampleBook);

console.log(library);


function displayBook() {
    
};
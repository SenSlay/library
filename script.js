// Array for books
const library = [];

// Constructor function for book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read) ? "Read" : "Not read";
};

const sampleBook = new Book("Rich Dad Poor Dad", "Robert Kiyasaki", 360, false);

const sampleBook2 = new Book("The Subtle Art", "Mark Manson", 280, false)

console.log(sampleBook);

library.push(sampleBook2);

function addBookToLibrary(book) {
    library.push(book);
};

addBookToLibrary(sampleBook);

console.log(library);


function displayBook() {
    const bookCtn = document.querySelector(".book-ctn");

    library.forEach(item => {
        console.log("Book: ", item.title);

        bookCtn.insertAdjacentHTML("afterbegin", `
        <div class="book">
            <div class="book-description">
                <h1 class="title">${item.title}</h1>
                <h3 class="author">${item.author}</h3>
                <p>Pages: ${item.pages}</p>
            </div>

            <div class="button-ctn">
            <button type="button" class="read-btn">${item.read}</button>
                <button type="button" class="dlt-btn">Delete</button>
            </div>
        </div>
        `);
    });
};

displayBook();
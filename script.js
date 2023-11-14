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
addBookToLibrary(sampleBook);

function addBookToLibrary(book) {
    library.push(book);
};

// Display book/s in HTML
function displayBooks() {
    const bookCtn = document.querySelector(".book-ctn");
    bookCtn.innerHTML = "";

    library.forEach(item => {

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

const modal = document.getElementById("modal");
const form = document.getElementById("book-form");

document.getElementById("open-modal").addEventListener("click", function() {
  modal.style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", function() {
  modal.style.display = "none";
});

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Check if input fields are filled
  if (form.checkValidity()) {
    modal.style.display = "none"; 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("is-read").value;

    const book = new Book(title, author, pages, isRead);

    addBookToLibrary(book);
    displayBooks();
    }

    // Reset the form to clear the input fields
    this.reset();
});

displayBooks();
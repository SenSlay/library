// Array for books
let library = [];

// Constructor function for book
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read) ? "Read" : "Not read";
    this.id = id;
};

function addBookToLibrary(book) {
    library.push(book);
};

// Display book/s in HTML
function displayBooks() {
    const bookCtn = document.querySelector(".book-ctn");
    bookCtn.innerHTML = "";

    // Retrieve saved user data and assign to libary array
    library = retrieveData();

    library.forEach(item => {

        bookCtn.insertAdjacentHTML("afterbegin", `
        <div class="book">
            <div class="book-description">
                <h1 class="title">${item.title}</h1>
                <h3 class="author">${item.author}</h3>
                <p>Pages: ${item.pages}</p>
                <div id="book-id" style="display: none;">${item.id}</div>
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
  event.preventDefault();

  // Check if input fields are filled
  if (form.checkValidity()) {
    modal.style.display = "none"; 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("is-read").value;

    const bookId = generateUniqueId();

    const book = new Book(title, author, pages, isRead, bookId);

    addBookToLibrary(book);
    saveData();
    displayBooks();
    }

    // Reset the form to clear the input fields
    this.reset();
});

const bookCtn = document.querySelector(".book-ctn");

bookCtn.addEventListener("click", (event) => {
    if (event.target.classList.contains('dlt-btn')) {
        if (confirm('Confirm to delete')) {
            // Delete the book element
            event.target.closest('.book').remove();

            saveData();
            console.log(library);
            console.log(event.target);
        }
    }
});

// Retrieve the idCounter value from localStorage, or set it to 0 if it doesn't exist
let idCounter = localStorage.getItem('idCounter') ? parseInt(localStorage.getItem('idCounter')) : 1;

function generateUniqueId() {
    const uniqueId = idCounter;
    idCounter++;

    // Save updated idCounter so book ids are consistent
    localStorage.setItem('idCounter', idCounter);
    return uniqueId;
};

// Save stringified library array
function saveData() {
    localStorage.setItem("data", JSON.stringify(library));
};

// Retrieve saved user data
function retrieveData() {
    return JSON.parse(localStorage.getItem("data"));
};

// Sample book
const sampleBook = new Book("Rich Dad Poor Dad", "Robert Kiyasaki", 360, false, 0);

addBookToLibrary(sampleBook);
saveData();
displayBooks();
// Book List
booksList = {
    "B001": {
        "bookId": "B001",
        "bookName": "Pride and Prejudice",
        "author": "Jane Austen",
        "publisher": "Penguin Classics",
        "year": 1813,
        "edition": "3",
        "category": "classic",
        "language": "english",
        "totalCopies": 20,
        "availableCopies": 12
    },
    "B002": {
        "bookId": "B002",
        "bookName": "Clean Code",
        "author": "Robert C. Martin",
        "publisher": "Prentice Hall",
        "year": 2008,
        "edition": "1",
        "category": "programming",
        "language": "english",
        "totalCopies": 15,
        "availableCopies": 5
    },
    "B003": {
        "bookId": "B003",
        "bookName": "Ponniyin Selvan",
        "author": "Kalki Krishnamurthy",
        "publisher": "Vikatan",
        "year": 1955,
        "edition": "5",
        "category": "classic",
        "language": "tamil",
        "totalCopies": 30,
        "availableCopies": 18
    },
    "B004": {
        "bookId": "B004",
        "bookName": "The Alchemist",
        "author": "Paulo Coelho",
        "publisher": "HarperCollins",
        "year": 1988,
        "edition": "2",
        "category": "fiction",
        "language": "english",
        "totalCopies": 25,
        "availableCopies": 10
    },
    "B005": {
        "bookId": "B005",
        "bookName": "Harry Potter and the Philosopher’s Stone",
        "author": "J.K. Rowling",
        "publisher": "Bloomsbury",
        "year": 1997,
        "edition": "1",
        "category": "fantasy",
        "language": "english",
        "totalCopies": 40,
        "availableCopies": 22
    },
    "B006": {
        "bookId": "B006",
        "bookName": "It",
        "author": "Stephen King",
        "publisher": "Viking Press",
        "year": 1986,
        "edition": "1",
        "category": "horror",
        "language": "english",
        "totalCopies": 18,
        "availableCopies": 6
    },
    "B007": {
        "bookId": "B007",
        "bookName": "Naruto Volume 1",
        "author": "Masashi Kishimoto",
        "publisher": "Shueisha",
        "year": 1999,
        "edition": "first",
        "category": "fantasy",
        "language": "japanese",
        "totalCopies": 35,
        "availableCopies": 20
    },
    "B008": {
        "bookId": "B008",
        "bookName": "Godaan",
        "author": "Munshi Premchand",
        "publisher": "Lokbharti",
        "year": 1936,
        "edition": "fourth",
        "category": "fiction",
        "language": "hindi",
        "totalCopies": 22,
        "availableCopies": 9
    }
}


const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[3].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});

// Displaying Books List in Grid
let booksTag = document.getElementById('book-list');
let booksHeader = `
    <div class="row grid-header fw-bold p-3 rounded-top-3 align-items-center">
        <div class="col">Book ID</div>
        <div class="col">Book Name</div>
        <div class="col">Author</div>
        <div class="col">Category</div>
        <div class="col">Total Copies</div>
        <div class="col">Available Copies</div>
        <div class="col">Actions</div>
    </div>
`;
let formatBooksData = ``;
let countBooks = 0;
for(id in booksList){
    book = booksList[id];
    countBooks++;
    console.log(book);
    
    formatBooksData += `
        <div class="row p-3 align-items-center">
            <div class="col fw-bold">${book.bookId}</div>
            <div class="col text-secondary">${book.bookName}</div>
            <div class="col text-secondary">${book.author}</div>
            <div class="col text-secondary text-capitalize">${book.category}</div>
            <div class="col text-secondary">${book.totalCopies}</div>
            <div class="col text-secondary">${book.availableCopies}</div>
            <div class="col">
                <div>
                    <i class="fa-solid fa-eye" id="user-eye-${book.bookId}" data="${book.bookId}"></i>
                    <i class="fa-solid fa-pen" id="user-edit-${book.bookId}"></i>
                </div>
                <div>
                    <i class="fa-solid fa-trash" id="user-delete-${book.bookId}"></i>
                </div>
            </div>
        </div>
    `;
    if(countBooks != booksList.length-1){
        formatBooksData += `<hr class="border border-secondary opacity-100">`;
    }
}
booksTag.innerHTML = `
    <div class="container-fluid text-center">
        <div class="row bg-light justify-content-center m-3 rounded-3">
            ${booksHeader}
            ${formatBooksData}
            <div class="row align-items-center">
                <p class="col text-start">Showing <b>1-8</b> of <b>8</b> results</p>
                <nav aria-label="Manage-pages" class="col">
                    <ul class="pagination justify-content-end">
                        <li class="page-item"><a href="#" class="page-link text-secondary disabled">Previous</a></li>
                        <li class="page-item active">
                        <a class="page-link" href="#" aria-current="page">1</a>
                        </li>
                        <li class="page-item"><a class="page-link text-secondary disabled" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <br>
`;

// Add Button References
let addBookBtn = document.getElementById('add-book');
let addBookDialog = document.getElementById('addBookDialog');
let close_dialog_listener = document.querySelectorAll('#close-dialog');
let submitButton = document.getElementById('add-member-details');

// Dialog fields
let bid = document.getElementById('bid');
let bookname = document.getElementById('bookname');
let author = document.getElementById('author-name');
let publisher = document.getElementById('publisher');
let year = document.getElementById('year');
let edition = document.getElementById('edition');
let category = document.getElementById('category');
let language = document.getElementById('lang');
let totalCopies = document.getElementById('tot-copies');
let availCopies = document.getElementById('avail-copies');

function clearDialogValues(){
    bid.value = '';
    bookname.value = '';
    author.value = '';
    publisher.value = '';
    year.value = '';
    edition.value = '';
    category.value = 'select';
    language.value = 'select';
    totalCopies.value = '';
    availCopies.value = '';
    document.querySelectorAll('small').forEach(element =>{
        element.style.display = 'none';
    });
    document.querySelectorAll('input').forEach(element =>{
        element.classList.remove('error-border');
    });
    document.querySelectorAll('select').forEach(element =>{
        element.classList.remove('error-border');
    });
}

function validateDialogValues(){
    let validBid = true, validBName  = true, validAuthor = true, validPublisher = true, validYear = true, validEdition = true, validCategory = true, validLanguage = true, validTotalCopies = true, validAvailCopies = true;
    
    // BID Check
    if(bid.value.trim() == ''){
        document.getElementById('error-bid').style.display = 'block';
        bid.classList.add('error-border');
        validBid = false;
    } else {
        document.getElementById('error-bid').style.display = 'none';
        bid.classList.remove('error-border');
        validBid = true;
    }

    // Book Name Check
    if(bookname.value.trim() == ''){
        document.getElementById('error-bname').style.display = 'block';
        bookname.classList.add('error-border');
        validBName = false;
    } else {
        document.getElementById('error-bname').style.display = 'none';
        bookname.classList.remove('error-border');
        validBName = true;
    }

    // Author Name Check
    if(author.value.trim() == ''){
        document.getElementById('error-author').style.display = 'block';
        author.classList.add('error-border');
        validAuthor = false;
    } else {
        document.getElementById('error-author').style.display = 'none';
        author.classList.remove('error-border');
        validAuthor = true;
    }

    // Publisher Check
    if(publisher.value.trim() == ''){
        document.getElementById('error-publisher').style.display = 'block';
        publisher.classList.add('error-border');
        validPublisher = false;
    } else {
        document.getElementById('error-publisher').style.display = 'none';
        publisher.classList.remove('error-border');
        validPublisher = true;
    }

    // Year Check
    if(year.value.trim() == ''){
        document.getElementById('error-year').style.display = 'block';
        year.classList.add('error-border');
        validYear = false;
    } else {
        document.getElementById('error-year').style.display = 'none';
        year.classList.remove('error-border');
        validYear = true;
    }

    // Edition Check
    if(edition.value.trim() == ''){
        document.getElementById('error-edition').style.display = 'block';
        edition.classList.add('error-border');
        validEdition = false;
    } else {
        document.getElementById('error-edition').style.display = 'none';
        edition.classList.remove('error-border');
        validEdition = true;
    }
    
    // Category Check
    if(category.value.trim() == 'select'){
        document.getElementById('error-category').style.display = 'block';
        category.classList.add('error-border');
        validCategory = false;
    } else {
        document.getElementById('error-category').style.display = 'none';
        category.classList.remove('error-border');
        validCategory = true;
    }

    // Language Check
    if(language.value.trim() == 'select'){
        document.getElementById('error-lang').style.display = 'block';
        language.classList.add('error-border');
        validLanguage = false;
    } else {
        document.getElementById('error-lang').style.display = 'none';
        language.classList.remove('error-border');
        validLanguage = true;
    }

    // Total Copies Check
    if(totalCopies.value.trim() == ''){
        document.getElementById('error-tot-copies').style.display = 'block';
        totalCopies.classList.add('error-border');
        validTotalCopies = false;
    } else {
        document.getElementById('error-tot-copies').style.display = 'none';
        totalCopies.classList.remove('error-border');
        validTotalCopies = true;
    }

    // Available Copies Check
    if(availCopies.value.trim() == ''){
        document.getElementById('error-avail-copies').style.display = 'block';
        availCopies.classList.add('error-border');
        validAvailCopies = false;
    } else {
        document.getElementById('error-avail-copies').style.display = 'none';
        availCopies.classList.remove('error-border');
        validAvailCopies = true;
    }

    return validBid && validBName && validAuthor && validPublisher && validYear && validEdition && validCategory && validLanguage && validTotalCopies && validAvailCopies;
}

addBookBtn.addEventListener('click', ()=>{
    clearDialogValues();
    document.body.style.opacity = 0.5;
    addBookDialog.showModal();

    addBookDialog.addEventListener('keydown',(event)=>{
        if(event.key == 'Escape'){
            clearDialogValues();
            document.body.style.opacity = 1;
            addBookDialog.close();
        }
    });

    close_dialog_listener.forEach(element =>{
        element.addEventListener('click',()=>{
            clearDialogValues();
            document.body.style.opacity = 1;
            addBookDialog.close();
        });
    });

    submitButton.addEventListener('click',()=>{
        let isValid = validateDialogValues();
        if(isValid){
            console.log('Data sent to Database');
        }
        else{
            console.log('Checks the Entered Data');
        }
    });
});

let viewBookList = document.querySelectorAll('[id ^= "user-eye-"]');
let viewBookTag = document.getElementById('viewBook');

function formatEdition(edition){
    let value = Number.parseInt(edition) % 10;

    if(Number.isNaN(value)) return edition;
    else if(value == 1){
        return `${edition}<sup>st</sup>`;
    }
    else if(value == 2){
        return `${edition}<sup>nd</sup>`;
    }
    else if(value == 3){
        return `${edition}<sup>rd</sup>`;
    }
    else if(value > 3){
        return `${edition}<sup>th</sup>`;
    }
}

function fillBookDetails(bookId){
    let currentBook = booksList[bookId];
    viewBookTag.innerHTML = `
    <div class="p-3 align-items-center d-flex justify-content-between bg-info bg-opacity-25">
    <div>
    <p class="h2 fw-bold text-primary">${currentBook.bookName}</p>
    <p class="h6 text-dark">Book Details</p>
    </div>
    <i class="fa-solid fa-close close-icon" id="close-viewBook-dialog"></i>
    </div>
    <div class="px-3 pt-3">
    <div class="d-flex justify-content-start">
    <div class="w-50 mx-2 pt-2 ps-2 border-top">
    <p class="h6 text-secondary">Book ID</p>
    <p>${currentBook.bookId}</p>
    </div>
    <div class="w-50 mx-2 pt-2 ps-2 border-top">
    <p class="h6 text-secondary">Author</p>
                    <p>${currentBook.author}</p>
                </div>
            </div>
            <div class="d-flex justify-content-start">
                <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Publisher</p>
                    <p>${currentBook.publisher}</p>
                </div>
                <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Year</p>
                    <p>${currentBook.year}</p>
                    </div>
            </div>
            <div class="d-flex justify-content-start">
                <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Edition</p>
                    <p class="text-capitalize">${formatEdition(currentBook.edition)}</p>
                    </div>
                    <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Category</p>
                    <p class="text-capitalize">${currentBook.category}</p>
                </div>
            </div>
            <div class="d-flex justify-content-start">
                <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Language</p>
                    <p class="text-capitalize">${currentBook.language}</p>
                </div>
                <div class="w-50 mx-2 pt-2 ps-2 border-top">
                    <p class="h6 text-secondary">Total Copies</p>
                    <p>${currentBook.totalCopies}</p>
                </div>
            </div>
            <div class="d-flex justify-content-start border-top">
                <div class="w-50 mx-2 pt-2 ps-2">
                    <p class="h6 text-secondary">Available Copies</p>
                    <p>${currentBook.availableCopies}</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="m-3 text-end">
            <button class="btn btn-primary" id="close-viewBook-dialog">Close</button>
        </div>
        <br>
    `;
}



viewBookList.forEach(element =>{
    element.addEventListener('click', ()=>{
        let currentBookId = element.getAttribute('data');
        fillBookDetails(currentBookId);
        viewBookTag.showModal();
        document.body.style.opacity = 0.5;

        viewBookTag.addEventListener('keydown',(event)=>{
            if(event.key == 'Escape'){
                document.body.style.opacity = 1;
                viewBookTag.close();
            }
        });

        let closeViewBookDialog = document.querySelectorAll('#close-viewBook-dialog');
        closeViewBookDialog.forEach(closeElement =>{
            closeElement.addEventListener('click',()=>{
                document.body.style.opacity = 1;
                viewBookTag.close();
            });
        });
    });
});
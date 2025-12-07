/* TODO:
Get a call for book details using bookID for handling borrowed and reserved books */

// Members data
membersList = {
    "sit22ec064": {
        userId: "sit22ec064",
        name: "Mounish",
        email: "sit22ec064@sairamtap.edu.in",
        gender: "Male",
        contact: "9944554581",
        currentlyBorrowedBooks: ["The MidNight Library", "DSA", "The Life of PI"],
        currentlyReservedBooks: ["Python", "Marvell stories", "Electromagnetic Theory", "Science Fiction", "C Programming"],
        history: {
            borrowedBooks: [],
            reservedBooks: [],
            renewBooks: []
        }
    },
    "sit22ec084": {
        userId: "sit22ec084",
        name: "Sathish",
        email: "sit22ec084@sairamtap.edu.in",
        gender: "Male",
        contact: "9944554581",
        currentlyBorrowedBooks: ["The MidNight Library", "DSA", "The Life of PI", "Cloud Computing", "Mullah Stories"],
        currentlyReservedBooks: ["Python", "Marvell stories"],
        history: {
            borrowedBooks: [],
            reservedBooks: [],
            renewBooks: []
        }
    },
    "sit22cs540": {
        userId: "sit22cs540",
        name: "Hema",
        email: "sit22cs540@sairamtap.edu.in",
        gender: "Female",
        contact: "9944554581",
        currentlyBorrowedBooks: ["The MidNight Library", "DSA", "The Life of PI", "Spoken English"],
        currentlyReservedBooks: ["Python", "Marvell stories"],
        history: {
            borrowedBooks: [],
            reservedBooks: [],
            renewBooks: []
        }
    },
    "sit22ec056": {
        userId: "sit22ec056",
        name: "Naveen Prasad",
        email: "sit22ec056@sairamtap.edu.in",
        gender: "Male",
        contact: "9944554581",
        currentlyBorrowedBooks: ["The MidNight Library", "DSA", "The Life of PI"],
        currentlyReservedBooks: ["Python", "Marvell stories"],
        history: {
            borrowedBooks: [],
            reservedBooks: [],
            renewBooks: []
        }
    },
};


// Handling Navbar
const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[2].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});


// Create the HTML DOCUMENT for members list
let memeber_list_div = document.getElementById('member-list');
let table_header = `
    <tr class="header">
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>CONTACT</th>
        <th>BORROWED BOOKS</th>
        <th>RESERVED BOOKS</th>
        <th>ACTIONS</th>
    </tr>    
`
let table_list = ``;
let count = 0;
for (let id in membersList){
  let attributes = membersList[id];
  count++;
  
  table_list += `
        <tr>
            <td class="ID">${attributes.userId}</td>
            <td>${attributes.name}</td>
            <td>${attributes.email}</td>
            <td>${attributes.gender}</td>
            <td>${attributes.contact}</td>
            <td>${attributes.currentlyBorrowedBooks.length}</td>
            <td>${attributes.currentlyReservedBooks.length}</td>
            <td>
                <div>
                    <div>
                        <i class="fa-solid fa-eye" id="user-eye-${attributes.userId}" data="${attributes.userId}"></i>
                        <i class="fa-solid fa-pen" id="user-edit-${attributes.userId}"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-trash" id="user-delete-${attributes.userId}"></i>
                    </div>
                    </div>
                    </td>
        </tr>
    `;
    if(count != Object.keys(membersList).length){
        table_list += `
        <tr class="horizontal-line">
                <td colspan="8"></td>
            </tr>
        `
    };
};
memeber_list_div.innerHTML =  `
    <table>${table_header}${table_list}</table>
`;

// Add member dialog logic
const add_mem_listener = document.getElementById('add-member');
const add_mem_dialog_listener = document.getElementById('add-member-dialog');

// Reference for all input values
let uid = document.getElementById('uid');
let uname = document.getElementById('username');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let gender = document.getElementById('gender');
let contact = document.getElementById('contact');

add_mem_listener.addEventListener('click', ()=>{
    document.body.style.opacity = 0.5;
    clearDialogValues();
    add_mem_dialog_listener.showModal();

    let close_dialog_listener = document.querySelectorAll('#close-dialog');
    close_dialog_listener.forEach(element =>{
        element.addEventListener('click', ()=>{
            clearDialogValues();
            add_mem_dialog_listener.close();
            document.body.style.opacity = 1;
        });
    });

    add_mem_dialog_listener.addEventListener('keydown', (event)=>{
        if(event.key == 'Escape'){
            clearDialogValues();
            add_mem_dialog_listener.close();
            document.body.style.opacity = 1;
        }
    });
    
    // Clear All values in dialog
    function clearDialogValues(){
        uid.value = '';
        uname.value = '';
        email.value = '';
        pwd.value = '';
        gender.value = 'select';
        contact.value = '';
        document.querySelectorAll('small').forEach(element =>{
            element.style.display = 'none';
        });
        document.querySelectorAll('input').forEach(element =>{
            element.classList.remove('error-border');
        });
        document.querySelector('select').classList.remove('error-border');
    }
    
    // Validation
    function validateDialogValues(){
        let validUid = true, validName  = true, validEmail = true, validPwd = true, validGender = true, validContact = true;
        if(uid.value.trim() == ''){
            document.getElementById('error-uid').style.display = 'block';
            uid.classList.add('error-border');
            validUid = false;
        }
        else{
            document.getElementById('error-uid').style.display = 'none';
            uid.classList.remove('error-border');
            validUid = true;
        }
        
        if(uname.value.trim() == ''){
            let nameErrorTag = document.getElementById('error-uname');
            nameErrorTag.innerText = `Username can't be Empty`;
            nameErrorTag.style.display = 'block';
            uname.classList.add('error-border');
            validName = false;
        }
        else{
            const regex = /[^A-Za-z0-9]/;
            if(regex.test(uname.value.trim())){
                let nameErrorTag = document.getElementById('error-uname');
                nameErrorTag.innerText = 'Special Characters not allowed';
                nameErrorTag.style.display = 'block';
                uname.classList.add('error-border');
                validName = false;
            }
            else{
                let nameErrorTag = document.getElementById('error-uname');
                nameErrorTag.style.display = 'none';
                uname.classList.remove('error-border');
                validName = true;
            }
        }
        
        // validate email with regex
        if(email.value.trim() == ''){
            let emailErrorTag = document.getElementById('error-email');
            emailErrorTag.innerText = `Email can't be Empty`;
            emailErrorTag.style.display = 'block';
            email.classList.add('error-border');
            validEmail = false;
        }
        
        // else if(<Check the existing email logic>)
        
        else if(!/^\S+@\S+\.\S+$/.test(email.value.trim())){
            let emailErrorTag = document.getElementById('error-email');
            emailErrorTag.innerText = `Invalid email`;
            emailErrorTag.style.display = 'block';
            email.classList.add('error-border');
            validEmail = false;
        }
        else{
            let emailErrorTag = document.getElementById('error-email');
            emailErrorTag.style.display = 'none';
            email.classList.remove('error-border');
            validEmail = true;
        }
        
        if(pwd.value.trim() == ''){
            let pwdErrorTag = document.getElementById('error-pwd');
            pwdErrorTag.innerText = `Password can't be Empty`;
            pwdErrorTag.style.display = 'block';
            pwd.classList.add('error-border');
            validPwd = false;
        }
        else if(pwd.value.trim().length <= 8){
            let pwdErrorTag = document.getElementById('error-pwd');
            pwdErrorTag.innerText = 'Password length must be more than 8 characters'
            pwdErrorTag.style.display = 'block';
            pwd.classList.add('error-border');
            validPwd = false;
        }
        else{
            let pwdErrorTag = document.getElementById('error-pwd');
            pwdErrorTag.style.display = 'none';
            pwd.classList.remove('error-border');
            validPwd = true;
        }
        
        if(gender.value.trim() == 'select'){
            document.getElementById('error-gender').style.display = 'block';
            gender.classList.add('error-border');
            validGender = false;
        }
        else{
            document.getElementById('error-gender').style.display = 'none';
            gender.classList.remove('error-border');
            validGender = true;
        }
        
        if(contact.value.trim() == ''){
            let contactErrorTag = document.getElementById('error-contact');
            contactErrorTag.innerText = `Contact can't be Empty`;
            contactErrorTag.style.display = 'block';
            contact.classList.add('error-border');
            validContact = false;
        }
        else{
            let isValidContact = true;
            for(x of contact.value.trim()){
                if(x < '0' || x > '9'){
                    isValidContact = false;
                }
            };
            if(!isValidContact || contact.value.trim().length != 10){
                let contactErrorTag = document.getElementById('error-contact');
                contactErrorTag.innerText = 'Invalid contact number';
                contactErrorTag.style.display = 'block';
                contact.classList.add('error-border');
                validContact = false;
            }
            else{
                let contactErrorTag = document.getElementById('error-contact');
                contactErrorTag.style.display = 'none';
                contact.classList.remove('error-border');
                validContact = true;
            }
        }

        return validUid && validName && validEmail && validPwd && validGender && validContact;

    }

    // Handle submit
    const submitButton = document.getElementById('add-member-details');
    submitButton.addEventListener('click', ()=>{
        isValid = validateDialogValues();
        if(isValid){
            console.log("Data sent to database");
        }
        else{
            console.log("Checks the entered data");
        }
    });
});

function formatDate(dateString){
    const parts = dateString.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

// View Short Profile

function handleShortProfileDialog(userId){
    let currentUserDetails = membersList[userId];
    console.log(currentUserDetails);
    
    let userPersonalDetails = `
        <div class="personal-details">
            <div class="personal-details-header">
                <img src="assets/account_circle.png" alt="">
                <i class="fa-solid fa-arrow-up-right-from-square expand-user"></i>
            </div>
            <div class="personal-details-body">
                <h3>${currentUserDetails.name}</h3>
                <p id="role">Member</p>
                <br>
                <div class="details-info">
                    <h4>User Information</h4>
                    <div id="uid-info">
                        <p class="title">User ID</p>
                        <p>${currentUserDetails.userId.toUpperCase()}</p>
                    </div>
                    <div id="email-info">
                        <p class="title">Email</p>
                        <p>${currentUserDetails.email}</p>
                    </div>
                    <div id="gender-info">
                        <p class="title">Gender</p>
                        <p>${currentUserDetails.gender}</p>
                    </div>
                    <div id="contact-info">
                        <p class="title">Contact</p>
                        <p>+91 ${currentUserDetails.contact}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    let borrowedBooksList = currentUserDetails.currentlyBorrowedBooks;
    let reservedBooksList = currentUserDetails.currentlyReservedBooks;

    let borrowedBooksTag = ``;
    let count = 1;
    for(let id in borrowedBooksList){
        // Replace this into fetching book from DB by using this id.
        // let book = fetchBook(id); => this id consists of the book id instead of title in memberlist
        // by using this book attribute, put all the values required below and do it same for reserved books
        borrowedBooksTag += `
            <div class="borrowed-books-${count++}">
                <img src="../assets/image.png" alt="">
                <div class="book-inner-set">
                    <div class="book-details">
                        <h4>${borrowedBooksList[id]}</h4>
                        <p>by Matt Haig</p>
                        <p>Borrow: 15/01/2025</p>
                    </div>
                    <p id="due">Due: <span id="dueDate">15/02/2025</span></p>
                </div>
            </div>
        `;
    }

    let reservedBooksTag = ``;
    count = 1;
    for(let id in reservedBooksList){
        // Replace this into fetching book from DB by using this id.
        // let book = fetchBook(id); => this id consists of the book id instead of title in memberlist
        // by using this book attribute, put all the values required below
        reservedBooksTag += `
            <div class="reserved-books-${count++}">
                <img src="../assets/image.png" alt="">
                <div class="book-inner-set">
                    <div class="book-details">
                        <h4>${reservedBooksList[id]}</h4>
                        <p>by Matt Haig</p>
                        <p>Reserved on: 15/01/2025</p>
                    </div>
                    <p id="theme">Horror</p>
                </div>
            </div>
        `;
    }

    let userProgress = `
        <div class="book-progress">
            <div class="book-progress-header">
                <div id="borrowed-books" class="book-progress-selected">
                    <p>Borrowed Books (${borrowedBooksList.length})</p>
                </div>
                <div id="reserved-books">
                    <p>Reserved Books (${reservedBooksList.length})</p>
                </div>
            </div>
            <div class="book-borrowed-body">
                ${borrowedBooksTag}
            </div>
            <div class="book-reserved-body">
                ${reservedBooksTag}
            </div>
        </div>
    `;

    userShortProfileDialog.innerHTML = `
        <i class="fa-solid fa-close" id="close-user-dialog"></i>
        <div class="divisions">
            ${userPersonalDetails}
            ${userProgress}
        </div>
    `;

    let borrowedBooksHeader = document.getElementById('borrowed-books');
    let reservedBooksHeader = document.getElementById('reserved-books');
    
    borrowedBooksHeader.addEventListener('click', ()=>{
        let borrowedBooksBody = document.getElementsByClassName('book-borrowed-body');
        let reservedBooksBody = document.getElementsByClassName('book-reserved-body');
    
        // Toggling header style
        borrowedBooksHeader.classList.add('book-progress-selected');
        reservedBooksHeader.classList.remove('book-progress-selected');
    
        // Toggling display style
        borrowedBooksBody[0].style.display = 'block';
        reservedBooksBody[0].style.display = 'none';
        
    });
    
    reservedBooksHeader.addEventListener('click', ()=>{
        let borrowedBooksBody = document.getElementsByClassName('book-borrowed-body');
        let reservedBooksBody = document.getElementsByClassName('book-reserved-body');
    
        // Toggling header style
        reservedBooksHeader.classList.add('book-progress-selected');
        borrowedBooksHeader.classList.remove('book-progress-selected');
    
        // Toggling display style    
        reservedBooksBody[0].style.display = 'block';
        borrowedBooksBody[0].style.display = 'none';
    });

    let close_dialog_listener = document.querySelector('#close-user-dialog');
    close_dialog_listener.addEventListener('click', ()=>{
        document.body.style.opacity = 1;
        userShortProfileDialog.close();
    });
    
    userShortProfileDialog.addEventListener('keydown', (event)=>{
        if(event.key == 'Escape'){
            userShortProfileDialog.close();
            document.body.style.opacity = 1;
        }
    });

    let dueTags = document.querySelectorAll('#due');
    dueTags.forEach(element =>{
        let dueDateString = element.getElementsByTagName('span')[0].textContent;
        let formattedDueDateString = formatDate(dueDateString);
        let borrowedDateString = formatDate("12/02/2025"); // upadate the date logic based on the book borrowed
        let differenceDays = calculateDays(borrowedDateString, formattedDueDateString);
        console.log(differenceDays);
        if(differenceDays < 0){
            element.classList.add('overDue')
        }
        else if(differenceDays < 5){
            element.classList.add('midDue');
        }
        else{
            element.classList.add('startDue');
        }
    });
}

let userEyeListener = document.querySelectorAll('[id ^= "user-eye-"]');
let userShortProfileDialog = document.getElementById('member-short-profile');

userEyeListener.forEach(element =>{
    element.addEventListener('click', ()=>{
        userShortProfileDialog.showModal();
        document.body.style.opacity = 0.5;

        let currentUserId = element.getAttribute('data');
        
        handleShortProfileDialog(currentUserId);

    });
});


function viewShortProfile(userId){
    console.log(userId);
    document.getElementById('member-short-profile').showModal();
}


function StringToDate(dateString){
    let dateNumber = parseInt(dateString[2]);
    let month = parseInt(dateString[1])-1;
    let year = parseInt(dateString[0]);
    let date = new Date(year, month, dateNumber);
    return date;
}

function calculateDays(startDate, endDate) {
    
    let start = new Date(startDate);
    let end = new Date(endDate);
    console.log(startDate + " " + endDate + " " + start + " " + end);
    
    let timeDifference = end - start;
    
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}

// let dueDateTags = document.querySelectorAll('#dueDate');
// dueDateTags.forEach(element =>{

// });

// let dueDateString = StringToDate(document.getElementById('dueDate').innerText);
// let givenDate = "12/03/2025";
// let dueTag = document.querySelectorAll('#due');

// let differenceDays = calculateDays(dueDateString, givenDate);
// console.log(differenceDays);

// if(differenceDays < 0){
//     dueTag.forEach(element =>{
//         element.classList.add('overDue');
//     });
// }
// else if(differenceDays < 5){
//     dueTag.forEach(element =>{
//         element.classList.add('overDue');
//     });
// }
// else{
//     dueTag.forEach(element =>{
//         element.classList.add('overDue');
//     });
// }
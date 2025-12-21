// Librarians Data
librariansList = {
    "sit22ec062": {
        userId: "sit22ec062",
        name: "Jeevesh",
        email: "sit22ec062@sairamtap.edu.in",
        gender: "male",
        contact: "9944554581",
        joined: "25/02/2023",
        history: {
            "request1": {
                requestId: "request1",
                type: "issue",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                // returnedDate: "12/01/2026"
            },
            "request2": {
                requestId: "request1",
                type: "return",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                // returnedDate: "12/01/2026"
            }
        }
    },
    "sit22ec080": {
        userId: "sit22ec080",
        name: "Siva",
        email: "sit22ec080@sairamtap.edu.in",
        gender: "male",
        contact: "9944554581",
        joined: "25/02/2023",
        history: {
            "request1": {
                requestId: "request1",
                type: "renew",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            },
            "request2": {
                requestId: "request1",
                type: "issue",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            }
        }
    },
    "sit22ec108": {
        userId: "sit22ec108",
        name: "Nagarjuna",
        email: "sit22ec108@sairamtap.edu.in",
        gender: "male",
        contact: "9944554581",
        joined: "25/02/2023",
        history: {
            "request1": {
                requestId: "request1",
                type: "reserve",
                reserveStatus: "approve",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            },
            "request2": {
                requestId: "request1",
                type: "reserve",
                reserveStatus: "reject",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            }
        }
    },
    "sit22ec059": {
        userId: "sit22ec059",
        name: "Ranzhani",
        email: "sit22ec059@sairamtap.edu.in",
        gender: "female",
        contact: "9944554581",
        joined: "25/02/2023",
        history: {
            "request1": {
                requestId: "request1",
                type: "reserve",
                reserveStatus: "reject",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            },
            "request2": {
                requestId: "request1",
                type: "renew",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            }
        }
    },
    "sit22ec052": {
        userId: "sit22ec052",
        name: "Ravikumar",
        email: "sit22ec052@sairamtap.edu.in",
        gender: "male",
        contact: "9944554581",
        joined: "25/02/2023",
        history: {
            "request1": {
                requestId: "request1",
                type: "reserve",
                reserveStatus: "approve",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            },
            "request2": {
                requestId: "request1",
                type: "issue",
                bookId: "book1",
                memberId: "sit22ec084",
                borrowedDate: "12/02/2025",
                returnedDate: "12/01/2026"
            }
        }
    },
}

// Handling Navbar
const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[1].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});

// Create the HTML DOCUMENT for members list in table format
let librarian_list_div = document.getElementById('librarian-list');
let table_header = `
    <tr class="header">
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>CONTACT</th>
        <th>ACTIONS</th>
    </tr>    
`
let table_list = ``;
let count = 0;
for(let id in librariansList){
    let attributes = librariansList[id];
    count++;

    table_list += `
        <tr>
            <td class="ID">${attributes.userId}</td>
            <td>${attributes.name}</td>
            <td>${attributes.email}</td>
            <td>${attributes.gender}</td>
            <td>${attributes.contact}</td>
            <td>
                <div>
                    <div>
                        <i class="fa-solid fa-eye" id="user-eye-${attributes.userId}" data="${attributes.userId}"></i>
                        <i class="fa-solid fa-trash" id="user-delete-${attributes.userId}"></i>
                    </div>
                </div>
            </td>
        </tr>
    `;
    if(count != Object.keys(librariansList).length){
        table_list += `
            <tr class="horizontal-line">
                <td colspan="6"></td>
            </tr>
        `;
    }
}
librarian_list_div.innerHTML =  `
    <table>${table_header}${table_list}</table>
`;

// Add librarian dialog logic
const add_lib_listener = document.getElementById('add-librarian');
const add_lib_dialog_listener = document.getElementById('add-librarian-dialog');

// Reference for all input values
let uid = document.getElementById('uid');
let uname = document.getElementById('username');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let gender = document.getElementById('gender');
let contact = document.getElementById('contact');

add_lib_listener.addEventListener('click', ()=>{
    document.body.style.opacity = 0.5;
    clearDialogValues();
    add_lib_dialog_listener.showModal();

    let close_dialog_listener = document.querySelectorAll('#close-dialog');
    close_dialog_listener.forEach(element =>{
        element.addEventListener('click', ()=>{
            clearDialogValues();
            add_lib_dialog_listener.close();
            document.body.style.opacity = 1;
        });
    });

    add_lib_dialog_listener.addEventListener('keydown', (event)=>{
        if(event.key == 'Escape'){
            clearDialogValues();
            add_lib_dialog_listener.close();
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
    const submitButton = document.getElementById('add-librarian-details');
    submitButton.addEventListener('click', ()=>{
        isValid = validateDialogValues();
        if(isValid){
            // Also add the joined date and send it to DB
            console.log("Data sent to database");
        }
        else{
            console.log("Checks the entered data");
        }
    });
});

// Create a HTML document for viewing individual librarian's profile'

// Toggling the whole and individual librarians page
let userEyeListener = document.querySelectorAll('[id ^= "user-eye-"]');
let backArrow = document.getElementById('back-page');
let viewLibrariansPage = document.getElementById('view-librarians');
let viewLibrarianProfilePage = document.getElementById('librarian-profile');

userEyeListener.forEach(element =>{
    element.addEventListener('click', ()=>{
        currentUserId = element.getAttribute('data');
        currentUserDetails = librariansList[currentUserId];
        localStorage.setItem('userData', JSON.stringify(currentUserDetails));
        window.location.href = 'librarian-profile.html';
    });
});

backArrow.addEventListener('click', ()=>{
    window.history.back();
});
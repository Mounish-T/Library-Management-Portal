
// Members data
membersList = {
    "sit22ec064": {
        userId: "sit22ec064",
        name: "Mounish",
        email: "sit22ec064@sairamtap.edu.in",
        gender: "Male",
        contact: "9944554581",
        currentlyBorrowedBooks: [],
        currentlyReservedBooks: [],
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
        currentlyBorrowedBooks: [],
        currentlyReservedBooks: [],
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
        currentlyBorrowedBooks: [],
        currentlyReservedBooks: [],
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
        currentlyBorrowedBooks: [],
        currentlyReservedBooks: [],
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
                        <i class="fa-solid fa-eye" id="user-eye-${attributes.userId}"></i>
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


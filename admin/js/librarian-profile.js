// Get User Data
const userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);

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

let screenBody = document.querySelector('.profile-body');
let personalData = `
    <div class="librarian-personal-details">
        <div class="personal-details-header">
            <img src="assets/account_circle.png" alt="">
            <i class="fa-solid fa-pen"></i>
        </div>
        <div class="info">
            <h2>${userData.name}</h2>
            <p>${userData.email}</p>
            <button id="edit-details-button">✏️ Edit Profile</button>
        </div>
        <br>
        <hr>
        <div class="personal-details-body">
            <h4>Librarian Information</h4>
            <div class="basic-details-group">
                <div class="basic-details-title">
                    <p>Gender</p>
                    <p>Contact</p>
                    <p>Joined Date</p>
                </div>
                <div class="basic-details-response">
                    <p>${findGender(userData.gender)}</p>
                    <p>${userData.contact}</p>
                    <p>${formatDateWithMon(userData.joined)}</p>
                </div>                      
            </div>
        </div>
    </div>
`;

let userActivities = userData.history;
let activiites = ``;
console.log(userActivities);
Object.keys(userActivities).forEach(request =>{
    let bookRequests = userActivities[request];
    let requestType = bookRequests.type == 'reserve' ? bookRequests.reserveStatus : bookRequests.type;
    activiites += `
        <tr>
            <td><p class="${requestType}">${findRequestLabel(requestType)}</p></td>
            <td>${bookRequests.bookId}</td>
            <td>${bookRequests.memberId}</td>
            <td>${bookRequests.borrowedDate}</td>
            <td>
                <div>
                    <div class="lib-actions">
                        <i class="fa-solid fa-pen" id="edit-request"></i>
                        <i class="fa-solid fa-trash" id="delete-request"></i>
                    </div>
                </div>
            </td>
        </tr>
    `;
    
});

let activitiesData = `
    <div class="librarian-activities">
        <div class="activities-header">
            <h4>Recent Activities</h4>
            <i class="fa-solid fa-add" id="add-request"></i>
        </div>
        <div class="activities-body">
            <table>
                <tr class="activities-body-header">
                    <th>ACTIVITY TYPE</th>
                    <th>BOOK TITLE</th>
                    <th>MEMBER NAME</th>
                    <th>DATE</th>
                    <th>ACTIONS</th>
                </tr>
                ${activiites}
            </table>
            <br>
        </div>
    </div>
`;
screenBody.innerHTML = `${personalData}${activitiesData}`;

let backArrow = document.getElementById('back-page');

backArrow.addEventListener('click', ()=>{
    window.history.replaceState(window.history.back(-1));   
});

// Check gender whether person is male or female
function findGender(gender){
    if(gender == 'male') return 'Male';
    return 'Female';
}

// Return request label
function findRequestLabel(type){
    if(type == 'issue') return 'Issue';
    else if(type == 'return') return 'Return';
    else if(type == 'renew') return 'Renew';
    else if(type == 'reject') return 'Reject';
    else if(type == 'approve') return 'Approve';
}

// Formate Date functions
function formatDateWithMon(dt) {
    const date = new Date(formatDate(dt));
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

function formatDate(dateString){
    const parts = dateString.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

// Edit member logic

let editDetailsBtn = document.getElementById('edit-details-button');
let editDialog = document.getElementById('edit-librarian-dialog');

// Reference for all input values
let e_uid = document.getElementById('e_uid');
let e_uname = document.getElementById('e_username');
let e_email = document.getElementById('e_email');
let e_gender = document.getElementById('e_gender');
let e_contact = document.getElementById('e_contact');
let e_date = document.getElementById('e_jdate');

editDetailsBtn.addEventListener('click', ()=>{
    clearDialogData();
    fillData();
    editDialog.showModal();
    document.body.style.opacity = 0.5;

    let close_dialog_listener = document.querySelectorAll('#close-dialog');
    close_dialog_listener.forEach(element =>{
        element.addEventListener('click', ()=>{
            clearDialogData();
            editDialog.close();
            document.body.style.opacity = 1;
        });
    });

    editDialog.addEventListener('keydown', (event)=>{
        if(event.key == 'Escape'){
            clearDialogData();
            editDialog.close();
            document.body.style.opacity = 1;
        }
    });

    // Fill the existing data
    function fillData(){
        e_uid.value = userData.userId;
        e_uname.value = userData.name;
        e_email.value = userData.email;
        e_gender.value = userData.gender;
        e_contact.value = userData.contact;
        e_date.value = formatDate(userData.joined);
    }

    // Clear All data in Dialog
    function clearDialogData(){
        e_uid.value = '';
        e_uname.value = '';
        e_email.value = '';
        e_gender.value = 'select';
        e_contact.value = '';
        e_date.value = '';
        document.querySelectorAll('small').forEach(element =>{
            element.style.display = 'none';
        });
        document.querySelectorAll('input').forEach(element =>{
            element.classList.remove('error-border');
        });
        document.querySelector('#e_gender').classList.remove('error-border');
    }

    // Validation
    function validateDialogValues(){
        let validUid = true, validName  = true, validEmail = true, validGender = true, validContact = true, validDate = true;
        if(e_uid.value.trim() == ''){
            document.getElementById('e_error-uid').style.display = 'block';
            e_uid.classList.add('error-border');
            validUid = false;
        }
        else{
            document.getElementById('e_error-uid').style.display = 'none';
            e_uid.classList.remove('error-border');
            validUid = true;
        }
        
        if(e_uname.value.trim() == ''){
            let nameErrorTag = document.getElementById('e_error-uname');
            nameErrorTag.innerText = `Username can't be Empty`;
            nameErrorTag.style.display = 'block';
            e_uname.classList.add('error-border');
            validName = false;
        }
        else{
            const regex = /[^A-Za-z0-9]/;
            if(regex.test(e_uname.value.trim())){
                let nameErrorTag = document.getElementById('e_error-uname');
                nameErrorTag.innerText = 'Special Characters not allowed';
                nameErrorTag.style.display = 'block';
                e_uname.classList.add('error-border');
                validName = false;
            }
            else{
                let nameErrorTag = document.getElementById('e_error-uname');
                nameErrorTag.style.display = 'none';
                e_uname.classList.remove('error-border');
                validName = true;
            }
        }
        
        // validate email with regex
        if(e_email.value.trim() == ''){
            let emailErrorTag = document.getElementById('e_error-email');
            emailErrorTag.innerText = `Email can't be Empty`;
            emailErrorTag.style.display = 'block';
            e_email.classList.add('error-border');
            validEmail = false;
        }
        
        // else if(<Check the existing email logic>)
        
        else if(!/^\S+@\S+\.\S+$/.test(e_email.value.trim())){
            let emailErrorTag = document.getElementById('e_error-email');
            emailErrorTag.innerText = `Invalid email`;
            emailErrorTag.style.display = 'block';
            e_email.classList.add('error-border');
            validEmail = false;
        }
        else{
            let emailErrorTag = document.getElementById('e_error-email');
            emailErrorTag.style.display = 'none';
            e_email.classList.remove('error-border');
            validEmail = true;
        }
        
        if(e_gender.value.trim() == 'select'){
            document.getElementById('e_error-gender').style.display = 'block';
            e_gender.classList.add('error-border');
            validGender = false;
        }
        else{
            document.getElementById('e_error-gender').style.display = 'none';
            e_gender.classList.remove('error-border');
            validGender = true;
        }
        
        if(e_contact.value.trim() == ''){
            let contactErrorTag = document.getElementById('e_error-contact');
            contactErrorTag.innerText = `Contact can't be Empty`;
            contactErrorTag.style.display = 'block';
            e_contact.classList.add('error-border');
            validContact = false;
        }
        else{
            let isValidContact = true;
            for(x of e_contact.value.trim()){
                if(x < '0' || x > '9'){
                    isValidContact = false;
                }
            };
            if(!isValidContact || e_contact.value.trim().length != 10){
                let contactErrorTag = document.getElementById('e_error-contact');
                contactErrorTag.innerText = 'Invalid contact number';
                contactErrorTag.style.display = 'block';
                e_contact.classList.add('error-border');
                validContact = false;
            }
            else{
                let contactErrorTag = document.getElementById('e_error-contact');
                contactErrorTag.style.display = 'none';
                e_contact.classList.remove('error-border');
                validContact = true;
            }
        }
        
        if(e_date.value.trim() == ''){
            let dateErrorTag = document.getElementById('e_error-date');
            dateErrorTag.innerText = `Joined Date can't be Empty`;
            dateErrorTag.style.display = 'block';
            e_date.classList.add('error-border');
            validDate = false;
        }
        else{
            let dateErrorTag = document.getElementById('e_error-date');
            dateErrorTag.style.display = 'none';
            e_date.classList.remove('error-border');
            validDate = true;
        }

        return validUid && validName && validEmail && validGender && validContact && validDate;

    }

    // Handle submit
    const submitButton = document.getElementById('edit-librarian-details');
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
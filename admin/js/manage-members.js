
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
for (let id in membersList){
  let attributes = membersList[id];
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
  `
};
memeber_list_div.innerHTML =  `
    <table>${table_header}${table_list}</table>
`

console.log(memeber_list_div);

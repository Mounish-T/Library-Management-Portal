// Here, need to code for taking the member name and book name using its corresponding id

librarianHistory = {
    "request1": {
        requestId: "request1",
        type: "issue",
        bookId: "book1",
        memberId: "sit22ec087",
        borrowedDate: "12/02/2025",
        // returnedDate: "12/01/2026"
    },
    "request2": {
        requestId: "request2",
        type: "return",
        bookId: "book2",
        memberId: "sit22ec084",
        borrowedDate: "12/02/2025",
        // returnedDate: "12/01/2026"
    },
    "request3": {
        requestId: "request3",
        type: "renew",
        bookId: "book3",
        memberId: "sit22ec054",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request4": {
        requestId: "request4",
        type: "issue",
        bookId: "book8",
        memberId: "sit22ec014",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request5": {
        requestId: "request5",
        type: "reserve",
        reserveStatus: "approve",
        bookId: "book14",
        memberId: "sit22ec064",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request6": {
        requestId: "request6",
        type: "reserve",
        reserveStatus: "reject",
        bookId: "book15",
        memberId: "sit22ec004",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request7": {
        requestId: "request7",
        type: "return",
        reserveStatus: "reject",
        bookId: "book12",
        memberId: "sit22ec081",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request8": {
        requestId: "request8",
        type: "renew",
        bookId: "book10",
        memberId: "sit22ec024",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request9": {
        requestId: "request9",
        type: "reserve",
        reserveStatus: "approve",
        bookId: "book18",
        memberId: "sit22ec074",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    },
    "request10": {
        requestId: "request10",
        type: "issue",
        bookId: "book20",
        memberId: "sit22ec044",
        borrowedDate: "12/02/2025",
        returnedDate: "12/01/2026"
    }
}

// Activate the color in side-nav for current page 
const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[0].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default navigation for demo
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});

let bookOverview = document.querySelector('#book-overview');
let recentActivities = document.querySelector('#recent-activities');
bookOverview.innerHTML = `
    <div class="row align-items-center">
        <div class="col bg-light rounded align-items-center p-3">
            <p class="fw-bold">Books Issued</p>
            <p class="fw-bold h3">${250}</p>
        </div>
        <div class="col bg-light rounded ms-3 p-3">
            <p class="fw-bold">Pending Returns</p>
            <p class="fw-bold h3">${36}</p>
        </div>
        <div class="col bg-light rounded ms-3 p-3">
            <p class="fw-bold">Overdue Books</p>
            <p class="fw-bold h3 text-danger">${20}</p>
        </div>
        <div class="col bg-light rounded ms-3 p-3">
            <p class="fw-bold">Active Reservations</p>
            <p class="fw-bold h3">${50}</p>
        </div>
    </div>
`;

let activityHeader = `
    <div class="row grid-header fw-bold p-3 rounded-top-3">
        <div class="col">BOOK TITLE</div>
        <div class="col">MEMBER NAME</div>
        <div class="col">ACTIVITY TYPE</div>
        <div class="col">DATE</div>
    </div>
`;

let activityList = ``;
for(req in librarianHistory){
    let request = librarianHistory[req];
    let requestType = request.type == 'reserve' ? request.reserveStatus : request.type;
    activityList += `
        <div class="row pt-3">
            <div class="col">${request.bookId}</div>
            <div class="col text-secondary">${request.memberId}</div>
            <div class="col"><p class="${requestType} text-capitalize">${requestType}</p></div>
            <div class="col text-secondary">${request.borrowedDate}</div>
        </div>
        <hr class="border border-secondary opacity-100">
    `;
}
recentActivities.innerHTML = `
    <p class="fw-bold h5">Recent Activity</p>
    <div class="container-fluid text-center">
        <div class="row bg-light justify-content-center mx-3 mt-3 rounded-top-3">
            ${activityHeader}
            ${activityList}
        </div>
        <div class="row bg-light mx-3 rounded-bottom-3 text-center justify-content-center">
            <p class="col-2 btn btn-primary">View All Activity</p>
        </div>
    </div>
`;
# 📚 Library Management Portal

A web-based **Library Management Portal** built using **HTML, CSS, and JavaScript** that supports three roles:
- **Admin**
- **Librarian**
- **Member**

This system enables efficient management of books, users, and transactions — including borrowing, returning, renewing, and reserving books.

---

## 🚀 Features Overview

### 🔐 Authentication
- Single login page for all roles.
- Email and password validation.
- Redirects to corresponding dashboard (Admin / Librarian / Member).
- Forgot password functionality.
- Error handling for invalid credentials.

---

### 🧑‍💼 Admin Panel
- Manage all users:
  - Add, update, delete **Librarians** and **Members**.
  - View user details and activity history.
- Manage Books:
  - CRUD operations for books (title, author, copies, etc.).
- Reports & Settings:
  - Generate usage/fine reports.
  - Change fine rate and borrowing/reservation limits.
- View History:
  - Complete activity logs for all Librarians and Members.

---

### 🧾 Librarian Panel
- Issue Books:
  - Assign books to members with a due date.
  - Validate borrowing limit and availability.
- Return Books:
  - Mark returned books and update availability.
  - Calculate overdue fines.
- Renew Books:
  - Extend due dates if not reserved by others.
- Manage Reservations:
  - Approve/cancel reservations and notify members.
- Manage Fines:
  - Record and track fine payments.
- View Member History:
  - View borrowing history of all members.

---

### 👤 Member Panel
- Search & View Books:
  - Search by title, author, or category.
- Borrow Books:
  - Request books for a fixed duration.
- Reserve Books:
  - Reserve unavailable books and get notified.
- Renew Books:
  - Request renewal before due date.
- View History:
  - See borrowing/reservation history.
- Fines:
  - View and pay overdue fines.

---

## 🗂️ Folder Structure
```
LibraryManagementPortal/
│
├── index.html                        # 🔐 Login page (main entry point)
├── forgot-password.html               # 🔑 Forgot password page (email verification, reset link)
│
├── assets/
│   ├── css/
│   │   ├── global.css                 # 🌐 Global styles shared by all pages (buttons, layout, fonts)
│   │   ├── login.css                  # 🎨 Login page UI (form, error messages)
│   │   ├── forgot-password.css        # 🎨 Forgot password page styling
│   │   └── notifications.css          # 🔔 Notification and alert styles (toasts, modals)
│   │
│   ├── js/
│   │   ├── utils.js                   # 🧠 Common helper functions (get/set data, alert, redirect)
│   │   ├── auth.js                    # 🔐 Handles login authentication and role validation
│   │   ├── api.js                     # 🌐 Handles local JSON or mock API calls (CRUD simulation)
│   │   ├── validation.js              # ✅ Email, password, and form input validation logic
│   │   └── notifications.js           # 🔔 Popup messages, warnings, confirmations
│
├── data/
│   ├── users.json                     # 👥 Stores all users (admin, librarian, member) and credentials
│   ├── books.json                     # 📚 Contains all book details (title, author, copies, etc.)
│   ├── transactions.json              # 🔄 Records all book transactions (issue, return, renew, reserve)
│   └── config.json                    # ⚙️ System configuration (fine rates, limits, etc.)
│
├── admin/
│   ├── admin-dashboard.html           # 🏠 Overview of library system for Admin (stats, summary)
│   ├── manage-librarians.html         # 🧑‍🏫 CRUD for librarian accounts
│   ├── manage-members.html            # 👥 CRUD for member accounts
│   ├── manage-books.html              # 📚 Add, edit, delete, or view books
│   ├── reports.html                   # 📈 View generated reports and analytics
│   ├── settings.html                  # ⚙️ Fine rates, reservation limits, system settings
│   ├── view-history.html              # 🕓 View all activity history (admin, librarian, member)
│   │
│   ├── css/
│   │   ├── admin-dashboard.css        # 🎨 Dashboard layout (cards, charts)
│   │   ├── manage-librarians.css      # 🎨 Styles for librarian management interface
│   │   ├── manage-members.css         # 🎨 Styles for member management interface
│   │   ├── manage-books.css           # 🎨 Book management forms and tables
│   │   ├── reports.css                # 🎨 Charts, tables for reports page
│   │   ├── settings.css               # 🎨 System settings (fine rates, configs)
│   │   └── view-history.css           # 🎨 History and logs page
│   │
│   └── js/
│       ├── admin-dashboard.js         # 🧩 Loads summary data, book/user counts
│       ├── manage-librarians.js       # ⚙️ CRUD operations for librarians
│       ├── manage-members.js          # ⚙️ CRUD operations for members
│       ├── manage-books.js            # ⚙️ CRUD operations for books
│       ├── reports.js                 # 📊 Generate and display usage/fine reports
│       ├── settings.js                # ⚙️ Update fine rates, reservation limits
│       └── view-history.js            # 🕓 Fetch and display user/librarian activity logs
│
├── librarian/
│   ├── librarian-dashboard.html       # 🏠 Librarian overview (pending requests, active issues)
│   ├── issue-books.html               # 📦 Issue books to members (with due date)
│   ├── return-books.html              # 🔁 Mark returned books and update stock
│   ├── renew-books.html               # 🔄 Renew books for members
│   ├── manage-reservations.html       # 📋 Approve or cancel reservations
│   ├── manage-fines.html              # 💰 Collect and track fines
│   ├── view-member-history.html       # 🧾 View history for all members
│   │
│   ├── css/
│   │   ├── librarian-dashboard.css    # 🎨 Dashboard view (summary of tasks)
│   │   ├── issue-books.css            # 🎨 Issue book form styling
│   │   ├── return-books.css           # 🎨 Return book interface
│   │   ├── renew-books.css            # 🎨 Renew book UI
│   │   ├── manage-reservations.css    # 🎨 Manage reservations page
│   │   ├── manage-fines.css           # 🎨 Manage fines and payments styling
│   │   └── view-member-history.css    # 🎨 View member borrowing/reservation history
│   │
│   └── js/
│       ├── librarian-dashboard.js     # 🧩 Load librarian summary data
│       ├── issue-books.js             # ⚙️ Handle book issuing logic
│       ├── return-books.js            # ⚙️ Handle returns and stock update
│       ├── renew-books.js             # ⚙️ Handle renew requests
│       ├── manage-reservations.js     # ⚙️ Handle approve/cancel reservations
│       ├── manage-fines.js            # ⚙️ Fine calculation and collection logic
│       └── view-member-history.js     # 🧾 Load all member activity for viewing
│
├── member/
│   ├── member-dashboard.html          # 🏠 Overview for member (borrowed/reserved/fine summary)
│   ├── search-books.html              # 🔍 Search available books
│   ├── borrow-requests.html           # 📦 Borrow book request page
│   ├── reserve-books.html             # 📚 Reserve unavailable books
│   ├── renew-requests.html            # 🔁 Renew borrowed books
│   ├── view-history.html              # 🧾 Member’s personal borrowing history
│   ├── fines.html                     # 💰 View and pay fines
│   │
│   ├── css/
│   │   ├── member-dashboard.css       # 🎨 Member home page layout
│   │   ├── search-books.css           # 🎨 Search books result grid/list styling
│   │   ├── borrow-requests.css        # 🎨 Borrow request page styling
│   │   ├── reserve-books.css          # 🎨 Reserve page interface
│   │   ├── renew-requests.css         # 🎨 Renew form styling
│   │   ├── view-history.css           # 🎨 Borrow history table layout
│   │   └── fines.css                  # 🎨 Fines and payment summary layout
│   │
│   └── js/
│       ├── member-dashboard.js        # 🧩 Load borrowed/reserved book summary
│       ├── search-books.js            # 🔍 Search & filter book logic
│       ├── borrow-requests.js         # ⚙️ Handle borrow requests
│       ├── reserve-books.js           # ⚙️ Handle reserve requests
│       ├── renew-requests.js          # ⚙️ Renew book logic
│       ├── view-history.js            # 🧾 Fetch and display user history
│       └── fines.js                   # 💰 Display and process fine payments
│
└── README.md                          # 📘 Project overview, setup instructions

```

---

## 🧠 Data Models (Example)

### 📘 Book Object
```json
{
  "bookid": "B001",
  "bookname": "Clean Code",
  "author": "Robert C. Martin",
  "publisher": "Prentice Hall",
  "year": 2008,
  "edition": "1st",
  "category": "Programming",
  "language": "English",
  "totalCopies": 10,
  "availableCopies": 6
}
```

### 👥 User Object

```json
{
  "userId": "sit22ec064",
  "username": "Mounish",
  "email": "mounish@gmail.com",
  "gender": "male",
  "contact": "1234567890",
  "currentborrowbooks": ["1", "5"],
  "currentreservedbooks": ["6"],
  "history": {
    "borrowedbooks": ["1", "2", "5"],
    "reservedbooks": ["4", "6"],
    "renewbooks": []
  }
}
```

Reference Line: 
```
https://stitch.withgoogle.com/projects/16225648388105004548
```

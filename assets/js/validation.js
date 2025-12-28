let EmailLabel=document.getElementsByClassName("email")[0];
let EmailInput = document.getElementsByClassName("email_input")[0];
let PasswordInput = document.getElementsByClassName("password_input")[0];
let PasswordLabel = document.getElementsByClassName("password")[0];
let Radio=document.getElementsByClassName("moving")[0];

function login() {
    
    if (EmailInput.value.trim() === "admin1@gmail.com") {

       
        EmailLabel.style.display="none";
        EmailInput.style.display="none";
        PasswordLabel.style.display = "block";
        PasswordInput.style.display = "block";

       
        if (PasswordInput.value === "123") {
            window.location.href = 'admin/admin-dashboard.html';
        }

    } else {
            EmailLabel.style.display="none";
            EmailInput.style.display="none";
            Radio.style.display="block";
            Radio.style.display="flex";
            PasswordLabel.style.display = "block";
            PasswordInput.style.display = "block";

            if(document.getElementById("Libraian").checked && PasswordInput.value == "12345"){
                window.location.href = 'admin/manage-librarians.html';
            }
            else if(PasswordInput.value === "12345"){
                window.location.href = 'admin/manage-members.html';
            }
            
    }

    console.log(EmailInput.value);
}


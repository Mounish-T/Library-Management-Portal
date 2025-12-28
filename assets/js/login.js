let emailBlock = document.getElementById('email-block');
let emailTag = document.getElementById('email-field');
let emailErrorTag = document.getElementById('error-email');

let pwdBlock = document.getElementById('pwd-block');
let pwdTag = document.getElementById('pwd-field');
let pwdErrorTag = document.getElementById('error-pwd');
let pwdEye = document.getElementById('pwd-visibility');

let roleBlock = document.getElementById('role-block');
let roleErrorTag = document.getElementById('error-role');

let submitBtn = document.getElementById('proceed');

let isPwdShow = false;

function validateEmail(){
    let validEmail = true;
    if(emailTag.value.trim() == ''){
        emailTag.classList.add('error-border');
        emailErrorTag.innerText = 'Email can\'t be Empty';
        emailErrorTag.style.display = 'block';
        validEmail = false;
    }
    else if(!/^\S+@\S+\.\S+$/.test(emailTag.value.trim())){
        emailTag.classList.add('error-border');
        emailErrorTag.innerText = 'Enter valid email';
        emailErrorTag.style.display = 'block';
        validEmail = false;
    }
    else if(emailTag.value == '<Existing Mail>'){
        emailTag.classList.add('error-border');
        emailErrorTag.innerText = 'Email already in use'
        emailErrorTag.style.display = 'block';
        validEmail = false;
    }
    else{
        emailTag.classList.remove('error-border');
        emailErrorTag.style.display = 'none';
        validEmail = true;
    }
    return validEmail;
}

function validatePwd(){
    let validPwd = true;
    if(pwdTag.value.trim() == ''){
        pwdTag.classList.add('error-border');
        pwdErrorTag.innerText = 'Password can\'t be Empty';
        pwdErrorTag.style.display = 'block';
        validPwd = false;
    }
    else if(pwdTag.value.length <= 8){
        pwdTag.classList.add('error-border');
        pwdErrorTag.innerText = 'Password must be more than 8 characters';
        pwdErrorTag.style.display = 'block';
        validPwd = false;
    }
    else{
        pwdTag.classList.remove('error-border');
        pwdErrorTag.style.display = 'none';
        validPwd = true;
    }
    return validPwd;
}

function validateRole(){
    let roleTag = document.querySelector('input[name="role"]:checked');
    let validRole = true;
    
    if(roleTag){
        roleErrorTag.style.display = 'none';
        validRole = true;
    }
    else{
        roleErrorTag.style.display = 'block';
        validRole = false;
    }
    return validRole;
}

pwdEye.addEventListener("click", () => {
    const isPassword = pwdTag.type === "password";
    pwdTag.type = isPassword ? "text" : "password";
    pwdEye.classList.toggle("fa-eye");
    pwdEye.classList.toggle("fa-eye-slash");
});

submitBtn.addEventListener('click', ()=>{
    if(validateEmail()){
        submitBtn.innerText = 'Login';
        if(emailTag.value == 'adminlib1@gmail.com' || emailTag.value == 'adminlib2@gmail.com'){
            emailTag.disabled = true;
            if(isPwdShow){
                let isValidAdmin = validatePwd();
                // Go to admin Dashboard page here
                if(isValidAdmin){
                    window.location.href = 'admin/admin-dashboard.html';
                }
            }
            else{
                pwdBlock.style.display = 'block';
                isPwdShow = true;
            }
        }
        else{
            emailTag.disabled = true;
            if(isPwdShow){
                let isValidPwd = validatePwd();
                let isValidRole = validateRole();
                let isValidUser = isValidPwd && isValidRole;
                // Go to librarian/member dashboard page here
                let roleTag = document.querySelector('input[name="role"]:checked');
                if(isValidUser){                    
                    if(roleTag.value == 'librarian'){
                        window.location.href = 'admin/manage-librarians.html';
                    }
                    else{
                        window.location.href = 'admin/manage-members.html';
                    }
                }
            }
            else{
                pwdBlock.style.display = 'block';
                roleBlock.style.display = 'block';
                isPwdShow = true;
            }
        }
    } 
});
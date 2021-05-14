const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('confirm-password');
const form = document.getElementById('signup-form');

let prevent_submit = false;

form.addEventListener('submit',(event)=>{
    checkName();
    checkEmail();
    checkPassword();
    if(prevent_submit){
        event.preventDefault();
    }
})


function checkName(){
    if(fname.value == ''){
        showAlert('First name is required');
        prevent_submit = true;
    }

    if(lname.value == ''){
    showAlert('Last Name is required');
    prevent_submit = true;
    }
}

function checkEmail(){
    if(email.value == ''){
        showAlert('Email is required');
        prevent_submit = true;
    }
}

function checkPassword(){
    if(password.value != ''){
        if(password.value.length < 6){
            showAlert('Minimum 6 characters are required for password');
        prevent_submit = true;
        };
    }else{
        showAlert('Password is required');
        prevent_submit = true;
    }
    
    if(password.value != password1.value){
        showAlert('Password did not match');
        prevent_submit = true;
        console.log('pass');
    }
}
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const submit = document.querySelector('.submit');

console.log(username);
console.log(email);
console.log(password1);
console.log(password2);
console.log(submit);

// MESSAGES
const usernameMessage = document.querySelector('.user-msg');
const emailMessage = document.querySelector('.email-msg');
const password1Message = document.querySelector('.password1-msg');
const password2Message = document.querySelector('.password2-msg');


console.log(usernameMessage);
console.log(emailMessage);
console.log(password1Message);
console.log(password2Message);

submit.addEventListener('click', e => {
    e.preventDefault();

    if (username.value === '' && email.value === '' && password1.value === '' && password2.value === '') {
        alert("please fill all input fields");
    }

    if (username.value === '') {
        showMessage(usernameMessage, 'Please provide your name', 'red');
    }
    else {
        showMessage(usernameMessage, 'Thank you for providing your name', 'green');
    }

    
    if (email.value === '') {
        showMessage(emailMessage, 'Please provide your email address', 'red');
    }
    else {
        showMessage(emailMessage, 'Thank you for providing your email', 'green');
    }

       
    if (password1.value === '') {
        showMessage(password1Message, 'Please provide your password', 'red');
    }
    else {
        showMessage(password1Message, 'Valid password', 'green');
    }

       
    if (password2.value === '') {
        showMessage(password2Message, 'Please confirm your password', 'red');
    }
    else if(password1.value !== password2.value){
        showMessage(password2Message, 'Valid Password', 'green');
    }
});

function showMessage(element, msg, color) {
    element.style.visibility = 'visible';
    element.textContent = msg;
    element.style.color = color;
    element.previousElementSibling.style.border = '2px solid $(color)';
}



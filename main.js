import {validInput} from "./modules/validation";

const form = document.forms?.main;
const email = document.getElementById("email");
const password = document.getElementById("password");
const eye = document.querySelector("svg[data-icon='eye']")
const eyeOff = document.querySelector("svg[data-icon='eye-off']")

const preventSubmit = e => {
    e.preventDefault();
    if(email.value === "admin@gmail.com" && password.value === "12345") alert("Success submit");
    else {
        alert("You are not authorized")
    }
    password.value = '';
    email.value = '';
};

form.addEventListener('submit', preventSubmit);
form.addEventListener('input', validInput);


eye.addEventListener('click', () => password.setAttribute("type","password"));
eyeOff.addEventListener('click', () => password.setAttribute("type","text"));
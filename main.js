import {validInput} from "./modules/validation";

const form = document.forms.mainForm;
const email = document.getElementById("email");
const password = document.getElementById("password");
const unlock = document.getElementById("unlock");
const login = document.getElementById("login");
const header = document.getElementById("header");


const preventSubmit = e => {
    e.preventDefault();
    password.value = '';
    email.value = '';
};

form.addEventListener('submit', preventSubmit);
form.addEventListener('input', validInput);

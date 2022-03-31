// import {validInput} from "./modules/validation";
import './style.css'
import { validInput } from './modules/validation'

const form = document.forms?.main;
const header = document.getElementById("header");
const email = document.getElementById('email');
const password = document.getElementById("password");
const eye = document.querySelector("svg[data-icon='eye']");
const eyeOff = document.querySelector("svg[data-icon='eye-off']");


const preventSubmit = e => {
    e.preventDefault();
    const emailValidity = email?.validity?.valid && email.value.trim();
    const passwordValidity = password?.validity?.valid && password.value.trim();
    const wrongPassword = emailValidity && !passwordValidity;

    if(email.value === "admin@gmail.com" && password.value === "123456"){
        alert("Success submit");
    } else {
        alert("You are not authorized");
    }

    header.textContent =
      emailValidity && passwordValidity
        ? 'Welcome!'
        : wrongPassword
          ? 'Wrong password'
          : 'Oops!';

    password.value = '';
    email.value = '';
};


eye.addEventListener('click',()=>password.setAttribute('type', 'password'));
form.addEventListener('submit', preventSubmit)
eyeOff.addEventListener('click',()=>password.setAttribute('type', 'text'));
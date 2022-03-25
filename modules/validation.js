const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#login');
const header = document.querySelector('#header');



const validInput = () => {
    const emailValidity = email?.validity?.valid && email.value.trim();
    const passwordValidity = password?.validity?.valid && password.value.trim();
    const wrongPassword = emailValidity && !passwordValidity;
    const white = "#ffffff";
    const success = '#5ab98c';
    const danger = '#d2877d';


     if (emailValidity && passwordValidity) {
           button.style.backgroundColor = success;
           button.style.color = white;
           button.style.border = `1px solid ${success}`;
           header.textContent = 'Welcome';
       } else if(!emailValidity && !passwordValidity){
           button.style.backgroundColor = danger;
           button.style.color = white;
           button.style.border = `1px solid ${danger}`;
           header.textContent = 'Oops!';
      }
    if (wrongPassword) {
        button.style.backgroundColor = danger;
        button.style.border = `1px solid ${danger}`;
        button.style.color = white
        header.textContent = "Wrong password";
    }
}

export {
    validInput,
}
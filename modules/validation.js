const email = document.querySelector('#email');
const password = document.querySelector('#password');
const header = document.querySelector('#header');
const fail = document.querySelector('svg[data-icon="fail"]');
const success = document.querySelector('svg[data-icon="success"]')



const validInput = () => {
    const emailValidity = email?.validity?.valid && email.value.trim();
    const passwordValidity = password?.validity?.valid && password.value.trim();
    const wrongPassword = emailValidity && !passwordValidity;

    header.textContent =
        emailValidity && passwordValidity
          ? 'Welcome!'
          : wrongPassword
              ? 'Wrong password'
              : 'Oops!';

       if(emailValidity) {
           success.classList.remove('hidden');
           fail.classList.add('hidden');
       } else {
           fail.classList.remove('hidden');
           success.classList.add('hidden');
       }
}

export {
    validInput,
}
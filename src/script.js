const inputEmail = document.getElementById('email');
const infoError = document.querySelector('.infoError');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btnSubmit = document.querySelector('.submit');

btnSubmit.addEventListener('click', (ev) => {
  ev.preventDefault();
  emailValidate();
})

function emailValidate() {
  if(!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add('error');
    infoError.style.display = 'block';
    inputEmail.setAttribute('placeholder', 'example@email.com');    
  } else {
    inputEmail.classList.remove('error');
    infoError.style.display = 'none';
    inputEmail.setAttribute('placeholder', '');   
  }
}



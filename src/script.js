const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordVisibility = document.querySelector('#password-visibility');
const btn = document.querySelector('button');

const togglePasswordVisibility = el => {
  console.log(el.type);
  el.type === 'password' ? (el.type = 'text') : (el.type = 'password');
};

const showErr = (el, message) => {
  const formControl = el.parentElement;
  const errorEl = formControl.querySelector('small');
  errorEl.innerText = message;
  formControl.className = 'form-control error';
};

const isAlphanumeric = el => {
  const exp = /"^[a-zA-Z0-9_]*$"/;
  return exp.test(String(el.value));
};

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value === '') {
      showErr(input, `${input.name} is required`);
    }
  });
};

passwordVisibility.addEventListener('change', () => {
  togglePasswordVisibility(password);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  checkRequired([username, email, password]);
  console.log(username.name, email.name, password.name);
});

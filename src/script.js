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

const isAlphanumeric = el => {
  const exp = /"^[a-zA-Z0-9_]*$"/;
  return exp.test(String(el.value));
};

passwordVisibility.addEventListener('change', () => {
  togglePasswordVisibility(password);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(username.name, email.name, password.name);
});

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordVisibility = document.querySelector('#password-visibility');
const btn = document.querySelector('button');

const alphaNumericExp = /"^[a-zA-Z0-9_]*$"/;
const emailExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

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

const showSuccess = el => {
  const formControl = el.parentElement;
  formControl.className = 'form-control success';
};

const isValid = (inputValue, expression) => {
  console.log(inputValue, expression);
  return expression.test(String(inputValue));
};

const checkForBlanks = inputArr => {
  inputArr.forEach(input => {
    if (input.value === '') {
      showErr(input, `${input.name} is required`);
    }
  });
};

const checkLength = (input, min, max) => {
  const { value, name } = input;
  if (value.length < min) {
    showErr(input, `The ${name} needs to be at least ${min} characters long.`);
  } else if (value.length > max) {
    showErr(input, `The ${name} needs to be less than ${max} characters long.`);
  } else {
    showSuccess(input);
  }
};

const checkEmail = (email, exp) => {
  if (!isValid(email.value, exp)) {
    showErr(email, 'Please enter a valid email address');
  } else {
    showSuccess(email);
  }
};

passwordVisibility.addEventListener('change', () => {
  togglePasswordVisibility(password);
});

const isSuccess = inputArr => {
  return inputArr.every(input => {
    const formControl = input.parentElement;
    return formControl.classList.contains('success');
  });
};

const showFormSuccess = inputArr => {
  const formSuccess = document.querySelector('.form-success');
  if (isSuccess(inputArr)) {
    formSuccess.className = 'form-success';
    inputArr.forEach(input => {
      input.value = '';
    });
  } else {
    formSuccess.className = 'form-success hide';
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  checkForBlanks([username, email, password]);
  checkLength(username, 3, 10);
  checkLength(password, 12, 24);
  checkEmail(email, emailExp);
  showFormSuccess([username, email, password]);
});

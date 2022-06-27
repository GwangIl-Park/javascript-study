const login = document.querySelector('.login-form');
const loginInput = login.querySelector('input');
const loginButton = login.querySelector('button');

function onLoginButtonClick() {
  const username = loginInput.value;
  console.log('Hello ', username);
}

loginButton.addEventListener('click', onLoginButtonClick);

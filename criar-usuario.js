import axios from 'axios';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const userDto = { name, email, password };

  axios.post('http://localhost:8080/api/users/',userDto)
    .then(response => {
      
    })
    .catch(error => {
      console.log(error);
    });
});

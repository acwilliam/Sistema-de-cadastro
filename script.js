document.addEventListener('DOMContentLoaded', function(){

  const errorMessage = document.querySelector('#error-message');
  const sucessMessage = document.querySelector('#sucess-message');
  const loginForm = document.querySelector('#login-form');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    const loginData = { email, password };
    console.log(loginData);
    axios.post('http://localhost:8080/api/login', loginData)
      .then(Response => {
        window.alert("Login Realizado com Sucesso")
        window.location.replace("pagina-inicio.html");
        
      })
      .catch(error =>{
        console.log(error);
        errorMessage.textContent = error.response.data;
      });
      
  });
  
});



document.addEventListener('DOMContentLoaded', function(){
  const signupForm = document.getElementById('signup-form');
  const errorMessage = document.querySelector('#message-signup-error');
  const messageSucess = document.querySelector('#sucess-message');
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#namesignup').value;
    const email = document.querySelector('#emailsignup').value;
    const password = document.querySelector('#passwordsignup').value;
  
    const userDto = { name, email, password };
  
    
      const response =   axios.post('http://localhost:8080/api/users/', userDto)
      .then(Response => {
        window.alert("Conta criada com sucesso, redirecionando para pagina principal!")
        window.location.replace("pagina-inicio.html");
        
      })
      .catch(error =>{
        console.log(error);
        errorMessage.textContent = error.response.data;
      });

   
  });
} );


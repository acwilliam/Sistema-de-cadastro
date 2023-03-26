
const errorMessage = document.querySelector('#message-signup-error');
const messageSucess = document.querySelector('#sucess-message');
document.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('#cadastro-pessoa-form');
  form.addEventListener('submit', async (event) => {

    const name = document.querySelector('#nome').value;
    const sobreName = document.querySelector('#sobrenome').value;
    const dataNascimento = moment(document.getElementById('data-nascimento').value).format('DD/MM/YYYY');
    const telefone = document.querySelector('#telefone').value;
    const email = document.querySelector('#email').value;
    const dadosPessoa = { name, sobreName, dataNascimento, email, telefone };
     
        const response = await axios.post('http://localhost:8080/api/pessoas', dadosPessoa)
        .then(Response => {
          window.alert("Funcionario Cadastrado com sucesso!")
          window.location.replace("pagina-inicio.html");
          console.log(response);
          
        })
        .catch(error =>{
         
          console.log(error);
          errorMessage.textContent = error.response.data;
        });
  
  });

});

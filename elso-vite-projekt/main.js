import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitButton').addEventListener('click', (e) => {
    let nev = document.getElementById('nameText').value;
    let email = document.getElementById('emailText').value;
    if (nev == '' || email == '' ) {
      e.preventDefault();
      let errorMessageElement = document.getElementById('errorMessage');
      errorMessageElement.textContent = 'Tölts ki minden mezőt!';
      errorMessageElement.classList.add('alert');
      errorMessageElement.classList.add('alert-danger');
    }
  })
})
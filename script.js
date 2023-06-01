function showAlert() {
    alert("¡Hola, estas es una alerta desde JavaScript!");
}

const form = document.getElementById('myForm');

//se utiliza “event.preventDefault()” para evitar que el formulario se envíe de la manera predeterminada, lo que permite realizar la validación antes de enviar los datos//

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
}



function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

//Este código agrega un detector de eventos al botón “Menú” 
//que alterna la clase “nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic //

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

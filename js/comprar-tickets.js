const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const totalPago = document.querySelector("#totalPago");

const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.querySelector("#btnResumen");

btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
  totalPago.textContent = "";
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 1;
    case "1":
      return 0.2;
    case "2":
      return 0.5;
    case "3":
      return 0.85;
    default:
        return false;
    }
}

function calcularTotal() {
    let total = 0;
        total = parseInt(cantidad.value) * calcularDescuento() * TICKET;
    return total;
}

function mostrarTotal() {
    totalPago.textContent = calcularTotal();
}//

//FALTAN VALIDACIONES

var mensajesError =[];

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        mensajesError.push('Ingresa tu nombre');
        return false;
    }
}

error.innerHTML = mensajesError.join(', ');
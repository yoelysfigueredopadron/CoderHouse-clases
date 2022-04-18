const nombre = prompt("Introduzca su nombre:");
// console.log(document); // mostramos todas las propiedades y elementos del documento html

// Se pueden usar los selectores para el DOM de la misma forma que se utilizan para el css
//.class
//#id
//tag

let divShow = document.getElementById("show");
let nodoNombre = document.querySelector(".nombre");
let otroNodoNombre = document.getElementsByClassName("nombre2");

divShow.innerHTML = nombre;
nodoNombre.innerHTML = nombre;
otroNodoNombre[0].innerHTML = nombre;
console.log(divShow);
console.log(nodoNombre);
console.log(otroNodoNombre);

// otro ejemplo
document.body.onload = addElement;

function addElement() {
  // crea un nuevo div y añade contenido
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  let currentDiv = document.getElementById("divActual");
  document.body.insertBefore(newDiv, currentDiv);
}
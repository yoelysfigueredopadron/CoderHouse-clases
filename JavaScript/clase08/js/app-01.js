let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");
let div1 = document.createElement("div"); // Crear nodo de tipo Elemento, etiqueta div

// Insertar HTML interno
div1.innerHTML = "<h2>¡Hola Coder!</h2>";
// Añadir el nodo Element como hijo de body
document.body.appendChild(div1);


// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);


// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);


// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);
// console.log(contenedores.length);

// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//     console.log(div.innerHTML);
// }

//Elminando el propio elemento, referenciando al padre
// parrafo.parentNode.removeChild(parrafo);

//Eliminando el primer elemento de clase paises
// paises[0].parentNode.removeChild(paises[3]);
// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);

// métodos para acceder al DOM
// getElementById()
// getElementsByClassName()
// getElementsByTagName()

// getElementById
let div = document.getElementById('app');
let parrafo = document.getElementById('parrafo1');

// console.log(div);
// console.log(parrafo);

// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// document.getElementById('mostrar').innerHTML = 'Aprendiendo DOM';

// getElementsByClassName
let paises = document.getElementsByClassName('paises');
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// modificamos el contenido del primer div
// const coleccion = document.getElementsByClassName('ejemplo');
// coleccion[0].innerHTML = 'Se modifico el contenido del div';

// getElementsByTagName
let contenedores = document.getElementsByTagName('div');
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);

const coleccionLi = document.getElementsByTagName('li');
document.getElementById('mostrar2').innerHTML = coleccionLi[1].innerHTML;

// Recorre HTMLcollection con For...Of
// for (const pais of paises) {
// 	console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
// 	console.log(div.innerHTML);
// }

const suma = 5 + 5;
console.log(suma);
// suma = suma + 5; // Uncaught TypeError: Assignment to constant variable.

let suma2 = 5 + 5;
console.log(suma2);
suma2 = suma2 + 5;
console.log(suma2);

// 1- Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
// 2- Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
// 3- Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

let nombre;
const centroFormacion = 'Coder House.';
let numero1, numero2, resultado;
// let texto1, texto2;
// let texto1;
// let texto2;

// Ejemplo1
// nombre = prompt("Introduzca su nombe:");
// alert("Hola " + nombre + '! Bienvenido a ' + centroFormacion);


// Ejemplo2
// alert('Introduzca un número para sumarlo a 100 y mostrar el resultado tanto en un alert en pantalla como en la consola del navegador.');
// // parseInt parsea o convierte de string a entero
// // numero1 = parseInt(prompt('Ingrese un número:'));
// // numero1 = prompt('Ingrese un número:'); // string
// // console.log(typeof(numero1));

// // parseFloat parsea o convierte de string a flotante (valores con punto decimal) 0.5 20.65
// numero1 = parseFloat(prompt('Ingrese un número'));
// // console.log(typeof(numero1));

// numero2 = 100;
// resultado = (numero1 + numero2).toFixed(2);
// alert(numero1 + ' + ' + numero2 + ' = ' + resultado);
// console.log(numero1 + ' + ' + numero2 + ' = ' + resultado);


// Ejemplo3
alert('Se solicitará dos textos mediante prompt() texto1 y texto2 para concatenarlos y mostralos en pantalla a través de un alert() y en la consola.');
let texto1 = prompt("Introduzca el texto1:");
let texto2 = prompt("Introduzca el texto2:");
alert("Resultado de la concatenación: " + texto1 + " " + texto2);
console.log("Resultado de la concatenación: " + texto1 + ' ' + texto2);
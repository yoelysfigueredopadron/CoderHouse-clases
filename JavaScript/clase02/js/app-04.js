// 1- Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
// 2- Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
// 3- Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

// Ejemplo 1
// let numero;

// alert("Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.");
// numero = parseInt(prompt("Introduzca un numero"));

// version 1
// if (numero > 1000)  {
//     alert("El número " + numero + " es mayor a 1000.");
// } else {
//     alert("El número " + numero + "  no es mayor a 1000.");
// }

// version 2
// if (numero >= 1000) {
//     alert("El número " + numero + " es mayor o igual a 1000.");
// } else {
//     alert("El número " + numero + "  es menor a 1000.");
// }

// if (numero >= 1000) {
//     alert(`El número ${numero} es mayor o igual a 1000.`);
// } else {
//     alert(`El número ${numero} es menor a 1000.`);
// }

// version 3
// if (numero > 1000)  {
//     alert("El número " + numero + " es mayor a 1000.");
//     } else if (numero < 1000) {
//         alert("El número " + numero + "  es menor a 1000.");
//          } else {
//             alert("El número " + numero + " es igual a 1000.");
//         }

// Ejemplo 2 HOLA, hola, hOAL
// alert("Pedir un texto mediante prompt y si es igual a (Hola) mostrar un alerta en pantalla y mostrar un mensaje por consola.");
// let textoIngresado = prompt("Ingrese un texto:");
// textoIngresado = textoIngresado.toLowerCase(); // HOLA hola hOAl hola Hola hola
// // textoIngresado = textoIngresado.toUpperCase(); (textoIngresado == "HOLA")

// // (textoIngresado == "Hola" || textoIngresado == "hola" || textoIngresado == "HOLA")
// if (textoIngresado == "hola") {
//     alert("Excelente, el texto ingresado por el usuario fue 'Hola' :)");
//     console.log("Excelente, el texto ingresado por el usuario fue 'Hola' :)");
// } else {
//     alert("Error, El texto ingresado por el usuario es distinto de 'Hola' :(");
//     console.log("Error, El texto ingresado por el usuario es distinto de 'Hola' :(");
// }

// Ejemplo 3
// alert('Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.');
// let numeroIngresado = parseInt(prompt("Ingrese un número"));

// if (numeroIngresado >= 10 && numeroIngresado <= 50) {
//     alert("El número ingresado " + numeroIngresado + " se encuentra dentro del rango 10 y 50 :)");
//     console.log("El número ingresado " + numeroIngresado + " se encuentra dentro del rango 10 y 50 :)");
// } else {
//     alert("El número ingresado " + numeroIngresado + " se encuentra fuera del rango 10 y 50 :(");
//     console.log("El número ingresado " + numeroIngresado + " se encuentra fuera del rango 10 y 50 :(");
// }

// Desafío

// Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado
// alert("Este programa pedirá que inserte un número y se le sumará el valor 20 cinco veces mostrando el resultado en la consola del navegador.");
// let numero1 = Number(prompt("Introduzca un número:"));
// let resultadoDeSuma;

// for (let i = 0; i <= 4; i++) { // i += 100; i = i + 100
//     resultadoDeSuma = numero1 + 20;
//     console.log(numero1 + ' + 20 = ' + resultadoDeSuma);
//     numero1 += 20; // numero1 = numero1 + 20;
// }


// otra variante
// alert("Este programa pedirá que inserte dos números cinco veces los sumará y mostrará el resultado en la consola del navegador.");
// for (let i = 0; i <= 4; i++) {
//     alert("Suma #" + (i + 1));
//     let numero1 = Number(prompt("Introduzca número1:"));
//     let numero2 = Number(prompt("Introduzca número2:"));
//     let resultadoDeSuma;

//     resultadoDeSuma = numero1 + numero2;
//     console.log(numero1 + ' + ' + numero2 + ' = ' + resultadoDeSuma);
// }



// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
// let nombre = "";
// let contar = 0;

// alert('Introduzca un listado de nombres uno por vez. Cuando desee salir del programa escriba "ESC" en la caja de texto.\n\n La palabra para salir del programa puede ser escrita tanto en minúscula como en mayúscula.');
// nombre = prompt("Introduzca un nombre");

// while (nombre == null || nombre == "") {
//     nombre = prompt("Introduzca un nombre");
// }
// nombre = nombre.toUpperCase();

// while (nombre != "ESC") {
//     contar++;
//     console.log(contar + '- ' + nombre);
//     nombre = prompt("Introduzca un nombre");
//     while (nombre == null || nombre == "") {
//         nombre = prompt("Introduzca un nombre");
//     }
//     nombre = nombre.toUpperCase();
// }



// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
let numero = 0;
let contar = 0;

alert("El siguiente algoritmo pide ingresar un número para mostrar en consola el saludo 'Hola' el número de veces introducido.");
numero = Number(prompt("Ingrese un número:"));


while (numero == null || numero == "" || isNaN(numero) || numero <= 0) {
    numero = Number(prompt("Ingrese un número:"));
}

console.log("Ciclo While");
while (contar < numero) {
    // console.log("Hola");
    console.log((contar + 1) + "- Hola");
    contar += 1; // contar++ o contar = contar + 1 o contar += 1
}

console.log("\nCiclo For");
for (let i = 0; i < numero; i++) {
    // console.log("Hola");
    console.log((i + 1) + '- ' + "Hola");
}

console.log("\nCiclo Do ... while");
contar = 0; // reiniciamos el valor de la varible contar a cero para probar el mismo ejemplo con Do ... while de está forma no mantenemos el valor que le habiamos asignado a la misma variable dentro del bucle While
do {
    // console.log("Hola");
    console.log((contar + 1) + '- ' + "Hola");
    contar = contar + 1;
}
while (contar < numero);
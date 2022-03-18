//Declaración de variable ES5. 
var nombreVariable1;

//Declaración de variable ES6.
let   nombreVariable2;
const LENGUAJE = "JAVASCRIPT";

let variableNumerica;
var variableTexto;
    
variableNumerica = 5;
variableTexto = "Mi texto";
variableTexto = 'Mi texto';

var   textoA = "CODER";
let   textoB = "HOUSE";
const BLANCO = " ";

//Concatenar textoA y textoB ("CODER" + "HOUSE" = "CODERHOUSE")
let resultadoA = textoA + textoB;
console.log("resultadoA: " + resultadoA);

//Concatenar textoB y 1 ("HOUSE" + 1 = "HOUSE1")
let resultadoB = textoB + 1;
console.log("resultadoB: " + resultadoB);

//Concatenar textoA, BLANCO y textoB ("CODER" + " " + "HOUSE" = "CODER HOUSE")
let resultadoC = textoA + BLANCO + textoB;
console.log("resultadoC: " + resultadoC);

let nombreIngresado = prompt("Ingrese su nombre");
console.log("Hola " + nombreIngresado + ". Esto es un mensaje de prueba");
alert("¡Hola Coder!");

let entrada = prompt("Ingresar una letra");
let salida  = entrada + " " + "ingresada";
alert(salida);
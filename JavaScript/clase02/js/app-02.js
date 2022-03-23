// let numero1 = parseInt(prompt("Ingrese número1:"));
// let numero2 = parseInt(prompt("Ingrese número2:"));
// let resultado;

// resultado = numero1 + numero2;
// alert("El resultado de la suma es " + resultado);

let lloviendo;
let consulta = prompt("¿Está lloviendo? \n responda si o no");

if (consulta == 'si') {
    lloviendo = true;
} else {
    lloviendo = false;
}

if (lloviendo) {
    alert("Esta lloviendo");
    console.log("Esta lloviendo");
} else {
    alert("No esta lloviendo");
    console.log("No esta lloviendo");
}
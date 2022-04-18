// variables globales
let baseDatos = [];
let nuevaPersona;
const tbodyTabla = document.querySelector('.table tbody');


function capturar() {

    // console.log("botón presionado");

    let nombreInput = document.getElementById("nombre1").value;
    console.log(nombreInput);
    let edadInput = document.getElementById("edad1").value;
    console.log(edadInput);

    nuevaPersona = new Persona(nombreInput, edadInput);
    console.log(nuevaPersona);
    agregar();

}

// Declaramos la clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Adiferencia del app-03.js solo agregamos las filas dentro del tbody optimizando el código
function agregar() {

    console.log("Datos agregados");
    baseDatos.push(nuevaPersona);
    console.log(baseDatos);
    // tbodyTabla.innerHTML += `<tr><td>${nuevaPersona.nombre}</td><td>${nuevaPersona.edad}</td></tr>`;

    //limpio html de tbodyTabla
    tbodyTabla.innerHTML = "";

    // volvemos agregar las columnas de la tabla (th)
    // tabla.innerHTML = `<thead class="thead-inverse"><tr><th>Nombre</th><th>Edad</th></tr></thead>`;

    // Recorre la base de datos e iterar los objetos en baseDatos para mostrarlos en la tabla.
    baseDatos.forEach(function (registro) {
        tbodyTabla.innerHTML += `<tr><td>${registro.nombre}</td><td>${registro.edad}</td></tr>`;
    });

}
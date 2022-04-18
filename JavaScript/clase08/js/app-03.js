// variables globales
let baseDatos = [];
let nuevaPersona;
let tabla = document.getElementById("tabla");


function capturar() {

    // console.log("botón presionado");

    let nombreInput = document.getElementById("nombre").value;
    console.log(nombreInput);
    let edadInput = document.getElementById("edad").value;
    console.log(edadInput);

    // let nuevaPersona = new Persona("Yoelys", 25); // variable local
    nuevaPersona = new Persona(nombreInput, edadInput);
    console.log(nuevaPersona);
    agregar();

}

// Declaramos una función constructora de la clase Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function agregar() {

    console.log("Datos agregados");
    baseDatos.push(nuevaPersona);
    console.log(baseDatos);
    // tabla.innerHTML += `<tbody><tr><td>${nuevaPersona.nombre}</td><td>${nuevaPersona.edad}</td></tr></tbody>`;

    //limpio html de la tabla
    tabla.innerHTML = "";

    // volvemos agregar las columnas de la tabla (th)
    tabla.innerHTML = `<thead class="thead-inverse"><tr><th>Nombre</th><th>Edad</th></tr></thead>`;

    // Recorre la base de datos e iterar los objetos en baseDatos para mostrarlos en la tabla.
    baseDatos.forEach(function (registro) {
        tabla.innerHTML += `<tbody><tr><td>${registro.nombre}</td><td>${registro.edad}</td></tr></tbody>`;
    });

}
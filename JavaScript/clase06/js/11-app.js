const baseClientes = [];
let nombreIngresado = "";
let apellidoIngresado = "";
let claveIngresada = "";

class cliente {
    constructor(nombre, apellido, clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;;
    }
};

nombreIngresado = prompt("Ingrese el nombre con el que desea registrarse");
apellidoIngresado = prompt("Ingrese su apellido");
claveIngresada = prompt("Ingrese una clave");

baseClientes.push(new cliente(nombreIngresado, apellidoIngresado, claveIngresada));

console.log(baseClientes);
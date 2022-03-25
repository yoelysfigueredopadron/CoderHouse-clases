// let clave;
// let confirmarClave;

// alert("Bienvenido al cajero automático de CoderHouse!");

// clave = prompt("Ingrese su clave");
// confirmarClave = prompt("Confirme su clave");

// while((clave != null || confirmarClave != null) && (clave != confirmarClave)) { // En la condición validamos que el usuario no haya presionado cancelar o haya introducido la clave correcta
//    if(clave != confirmarClave) {
//     alert("Error, clave incorrecta. Vuelva a intentarlo, por favor!");
//    }
    
//     clave = prompt("Ingrese su clave");
//     confirmarClave = prompt("Confirme su clave");
// }

// if(clave == null || confirmarClave == null) {
//     alert("Ha decidido abandonar el cajero de momento, vuelva pronto.");
// } else {
//     alert("Ha ingresado su clave correctamente. Bienvenido a su caja de ahorro.");
// }

// Ejemplo para validar un número
let numero = Number(prompt("Introduzca un número"));

if (numero == null || numero == "" || isNaN(numero) || numero <= 0) {
    alert("No ha introducido un número correcto.");
} else {
    alert("El número introducido es: " + numero);
}
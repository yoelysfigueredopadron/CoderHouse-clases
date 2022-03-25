// Ejemplo 1 se muestran los valores del 0 al 9
// for (let i = 0; i < 10; i++) {
//     // alert(i);
//     console.log("valor i =", i);
// }

// Ejemplo 2 se muestran los valores del 1 al 10
// for (let i = 1; i <= 10; i++) {
//     // alert(i);
//     console.log("valor i =", i);
// }

// Ejemplo 3 Algoritmo para mostrar la tabla de multiplicación
// // Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar el número que desea multiplicar de 1 hasta 10"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// console.log("Tabla de multiplicación del número (" + ingresarNumero + ")");
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero + " X " + i + " = " + resultado);
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
//     resultado = 0;
// }

// Ejemplo 4
// La condición inicial era (1 <= 20) pero como serian muchos nombres a introducir lo hemos modificado a (1 <= 5)
// console.log("listado de turnos:");
// for (let i = 1; i <= 5; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre N°" + i + ":");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
//     console.log(" Turno  N° " + i + "  Nombre: " + ingresarNombre);
// }

// Ejemplo 5
// for (let i = 1; i <= 10; i++) {
//     // Si la variable i es igual 5 interrumpo el for.
//     if (i == 5) {
//         break;
//     }
//     alert(i);
//     console.log(i);
// }

// Ejemplo 6
// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es 5, no se interpreta la repetición, saltamos esa iteración
//     if (i == 5) {
//         continue;
//     }
//     alert(i);
//     console.log(i);
// }

// Ejemplo 7
// Esto es solo un ejemplo demostrativo de un ciclo o bucle infinito. No es necesario que lo prueben pero en caso que lo hagan si se les tilda PC debe de cerrar el navegador y comentar el código, si la misma no vuelve es porque tenian poca memoria disponible y han provocado un desbordamiento de la misma, en tal caso deberan reinicar, recuerden comentarlo esto solo es un ejemplo de bucle infinito que no debería ser ejecutado ya que es un error de lógica de programación
// let repetir = true;
// while (repetir) {
//     console.log("Al infinito y...¡Más allá!");
// }

// Ejemplo 8
// let i = 1;
// while (i < 10) {
//     console.log("El número es: " + i);
//     i++;
// }

//Ejemplo 9
// Se va a ejecutar solo una vez porque la variable repetir = false pero la condición se comprueba después de haber pasado al menos una vez por el bloque de código de do {...} while(condición)
// let repetir = false;
// do {
//     console.log("¡Solo una vez!");
// }
// while (repetir)

//Ejemplo 10
// let i = 1;
// do {
//     console.log("El número es: " + i);
//     i++;
// }
// while (i < 10); // Cuando i = 10 se detiene el bucle

// Ejemplo 11
// let numero = 0;
// do {
//     // Repetimos con do...while mientras el usuario ingresa un n°
//     numero = prompt("Ingresar Número:");
//     console.log(numero);
//     // Si el parseo no resulta un número se interrumpe el bucle.
// }
// while (Number(numero));
// variantes de la condición parseInt(numero), parseFloat(numero), Number(numero)

// Ejemplo 12
// let entrada = prompt("Ingresar un nombre:");

// // Repetimos hasta que se ingresa "ESC"
// while (entrada != "ESC") {
//     switch (entrada) {
//         case "ANA":
//             alert("Hola Ana");
//             break;
//         case "JUAN":
//             alert("Hola Juan");
//             break;
//         default:
//             alert("¿Quien sos vos?")
//             break;
//     }
//     entrada = prompt("Ingresar un nombre");
// }

// Ejemplo 13
// let entrada = prompt("Ingresar un nombre:"); //.toUpperCase()
// console.log(entrada);

// while (entrada == null) {
//     entrada = prompt("Ingresar un nombre:");
//     console.log(entrada);
// }
// entrada = entrada.toUpperCase();

// // Repetimos hasta que se ingresa "ESC"
// while (entrada != "ESC") {
//     switch (entrada) {
//         case "ANA":
//             alert("Hola Ana");
//             break;
//         case "JUAN":
//             alert("Hola Juan");
//             break;
//         default:
//             alert("¿Quien sos vos?")
//             break;
//     }
//     console.log(entrada);
//     entrada = prompt("Ingresar un nombre:");//.toUpperCase()
//     while (entrada == null) {
//         entrada = prompt("Ingresar un nombre:");
//         console.log(entrada);
//     }
//     entrada = entrada.toUpperCase();
// }

// Ejemplo 14
// let dia;

// switch (new Date().getDay()) {
//     case 0:
//         dia = "Domingo";
//         break;
//     case 1:
//         dia = "Lunes";
//         break;
//     case 2:
//         dia = "Martes";
//         break;
//     case 3:
//         dia = "Miércoles";
//         break;
//     case 4:
//         dia = "Jueves";
//         break;
//     case 5:
//         dia = "Viernes";
//         break;
//     case 6:
//         dia = "Sábado";
//         break;
// }
// console.log("Hoy es " + dia + '.');

// Ejemplo 15
// let dia;

// switch (new Date().getDay()) {
//     case 0:
//         dia = "Domingo";
//         break;
//     case 1:
//         dia = "Lunes";
//         break;
//     case 2:
//         dia = "Martes";
//         break;
//     case 3:
//         dia = "Miércoles";
//         break;
//     case 4:
//         dia = "Jueves";
//         break;
//     case 5:
//         dia = "Viernes";
//         break;
//     case 6:
//         dia = "Sábado";
//         break;
//     default:
//         console.log("No es un día válido de la semana");
//         break;
// }

// if (dia == "Viernes") {
//     console.log("Hoy es viernes y mi cuerpo lo sabe.");
// } else if (dia == "Sábado" || dia == "Domingo") {
//     console.log("Llego el fin de semana, vamos a disfrutar.");
// } else {
//     console.log("Hoy es " + dia + '. Seguimos esperando que llegue el fin de semana.');
// }
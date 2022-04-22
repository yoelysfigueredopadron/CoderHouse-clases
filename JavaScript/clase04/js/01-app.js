// ejemplo 1
// function saludar() {
//     console.log("¡Hola estudiantes!");
// }

// saludar();

// Ejemplo 2
// function solicitarNombre() {
//     let nombreIngresado = prompt("Ingresar nombre");
//     alert("El nombre ingresado es " + nombreIngresado);
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// Ejemplo 3
// Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// console.log(resultado);
// // Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }

// // Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje);
// }

// // Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado);

// Ejemplo 4
// function sumar(primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }

// let resultado = sumar(5, 8);
// console.log(resultado);
// console.log(sumar(5, 8)); //aquí usamos la función dentro de console.log()

// Ejemplo 5
// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, 5, "*"));

// Ejemplo 6
// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
// }
// //No se puede acceder a la variable resultado fuera del bloque (variable local)
// console.log(sumar(3, 5));
// console.log(resultado);

// Ejemplo 7
// let resultado = 0
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
// sumar(5, 6);

// // Se puede acceder a la variable resultado porque es global
// console.log(resultado);

// Ejemplo 8
// Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
// const suma = function (a, b) { return a + b };
// const resta = function (a, b) { return a - b };
// console.log(suma(15, 20));
// console.log(resta(15, 5));

// Ejemplo 9
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;

// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva = x => x * 0.21;
// let precioProducto = 500;
// let precioDescuento = 50;

// //Calculo el precioProducto + IVA - precioDescueto
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
// console.log(nuevoPrecio);

// ejemplo 10
// function sumar(a, b) {
//     return a + b;
// }

// const resultado = sumar(12, 3);
// console.log(resultado);

// Ejemplo 11
// let nummero1 = 40;
// let nummero2 = 30;

// // let x = multiplicar(4, 3);   // La función es llamada, return regresa el valor a la variable x
// let x = multiplicar(nummero1, nummero2); // otra forma de pasar parámetros

// function multiplicar(a, b) {
//   return a * b;             // La función regresará el producto de a * b
// }

// // console.log(`${x}`);
// console.log(`${nummero1} * ${nummero2} = ${x}`); // ES6
// console.log(nummero1 + " * " + nummero2 + " = " + x); // ES5

// Ejemplo 12
// let total = 0;
// function agregarCarrito(precio) {
//     return total += precio;
// }

// function calcularImpuesto(total) {
//     return total * 1.21; // 21% a pagar (IVA)
// }

// total = agregarCarrito(300);
// total = agregarCarrito(100);
// total = agregarCarrito(200);

// const totalPagar = calcularImpuesto(total);

// console.log(`El total de los productos agregados al carrito es de $${total}`);
// console.log(`El total a pagar con el IVA es de $${totalPagar}`);

//Ejemplo 13
// let gradosfarenheit = 0;

// gradosfarenheit = parseFloat(prompt("Introduzca los grados farenheit(°F) para convertir a grados Celsius(°C):"));
// mostrarGradosCelsius();

// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }

// function mostrarGradosCelsius() {
//   console.log(`${gradosfarenheit}°F es equivalente a ${toCelsius(gradosfarenheit).toFixed(1)}°C`);
// }

// ejemplo 14
// function cuota(precio) {
//   resultado = (precio * 1.1 / 12).toFixed(2);
//   console.log("El valor de cada una de tus cuotas será " + resultado);
// }
// //Llamamos a la función
// cuota(1000);

// ejemplo 15
// function conParametros(parametro1, parametro2) {
//   parametro1 = Number(parametro1);
//   parametro2 = Number(parametro2);

//   console.log(parametro1 + " + " + parametro2 + ' = ' + (parametro1 + parametro2));
// }

// conParametros(2, 2);
// conParametros(5, 2);

// // transformando función anónima en función flecha
// // function (a) {
// //   return a + 100;
// // }

// // Desglose de la función flecha

// // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
// (a) => {
//   return a + 100;
// }

// // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
// (a) => a + 100;

// // ejemplo
// let a = "Hello World";

// function mensaje(saludo) {
//   alert(saludo);
// }

// mensaje(a);
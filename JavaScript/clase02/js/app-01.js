// Ejemplo 1
// let numero = 10;

// // Con (numero == 10) comparamos si la variable numero es igual a 10
// if (numero == 10){
//     console.log("El número es igual a 10");
// }

// let bandera = true;

// if (bandera){
//     console.log("El valor de la variable (bandera) es True");
// }

// Ejemplo 2
// let color = "Rojo1"
// // Si la condición (color == "Rojo") es verdadera se ejecutará la primera instrucción sino se ejecutará la segunda
// if (color == "Rojo") {
//     console.log("El color es Rojo");
// } else {
//     console.log("El color no es Rojo");
// }

// // Otra forma correcta de escribir el código de arriba es sin llaves {}
// if (color == "Rojo")
//     console.log("El color es Rojo");
// else
//     console.log("El color no es Rojo");

// // Cuando ejecutamos solo una línea de código no es obligatorio escribirla en entre llaves {}, si es el caso cuando sean multiples líneas de código.
// if (color == "Rojo") {
//     console.log("El color es Rojo");
//     console.log("La condición se a cumplido");
// }
// else {
//     console.log("El color no es Rojo");
//     console.log("La condición no se ha cumplido");
// }

// Ejemplo 3
// let nombreUsuario = prompt("Ingresar nombre de usuario");

// if (nombreUsuario == "") {
//     alert("No ingresaste el nombre de usuario");
// }
// else {
//     alert("Nombre de usuario ingresado " + nombreUsuario);
// }

// Ejemplo 4
// En la línea 52 asignamos un valor númerico a la variable precio
// let precio = 100; //10.5, 25.5, 60, 100.5

// En la línea 55 asignamos un valor a la variable precio utilizando el método de entreda de datos prompt(). Para evitar errores la variable de la línea 52 debe estar comentada ya que ambas tienen el mismo nombre y no se pueden declarar más de una variable con el mismo identificador(nombre)
// let precio = prompt("Introduzca un número:");

// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// else if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// else if (precio < 100) {
//     alert("El precio es menor que 100");
// }
// else {
//     alert("El precio es mayor o igual que 100");
// }

// Ejemplo 5
// let varBoolean = true;
// let numero   = 10;
// let mayorQue5 = (numero > 5); // su valor sera true

// if (varBoolean) {
//     console.log(varBoolean);
//     console.log("varBoolean = true");
//     console.log("varBoolean = " + varBoolean); // Concatena la variable varBoolean con la cadena de texto
//     console.log("varBoolean = ", varBoolean);  // Muestra el valor de la variable varBoolean en un color diferente ya que fue pasado como otro parámetro diferente separado por coma. Paramétro1 es la cadena de texto "varBoolean = " y Parámetro2 es el valor booleano de la variable varBoolean
//     console.log("varBoolean = ", varBoolean, "\nnúmero = ", numero); // Le pasamos a console.log() 4 argumentos separados por comas para mostrar en la consola del navegador
// }

/*
    Operadores aritméticos (+, -, *, /, %, **, ++, --) % módulo, ** exponenciación, ++ incremento, -- decremento
    Operadores de comparación (>, >=, <, <=, ==, !=, ===, !==) === comparador estricto de igualdad, !== comparador estricto de desigualdad(distinto)
    Operadores lógicos (and, y, &&), (or, o, ||) y (not, no, !)
*/

// Ejemplo 6
// combinación del operador && (AND)
// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if ((nombreIngresado != "") && (apellidoIngresado != "")) {
//     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//     /* Si las variables nombreIngresado y apellidoIngresado son igual a una cadena en blanco(se presiona aceptar sin haber introducido datos) se mostrará el alert() con el error.

//     Observar que si se presiona el botón cancel del la función prompt() se les estaría asignando a las variables el valor de "null"
//     */
//     alert("Error: Ingresar nombre y apellido");
// }

// otra version del código de arriba mejorado
// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if ((nombreIngresado != "") && (apellidoIngresado != "") && (nombreIngresado != null) && (nombreIngresado != null)) {
//     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//     alert("Error: Ingresar nombre y apellido");
// }

// Ejemplo 7
// combinación del operador || (OR)
// let nombreIngresado = prompt("Ingresar nombre");

// if ((nombreIngresado == "ANA") || (nombreIngresado == "ana")) {
//     alert("El nombre ingresado es Ana");
// } else {
//     alert(":( El nombre ingresado no es Ana");
// }

// Ejemplo 8
// Combinando los operadores && (AND) y || (OR)
// let nombreIngresado = prompt("Ingresar nombre");

// if ((nombreIngresado != "") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))) {
//     alert("Hola Ema");
// } else {
//     alert("Error: Ingresar nombre valido");
// }

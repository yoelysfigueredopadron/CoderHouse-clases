let numero1 = parseInt(prompt ("Ingresá un número"));

if (numero1 === "" || numero1 === null || isNaN(numero1)) {
    alert("No ha introducido un número. Por favor vuelva a intentarlo.");
    window.location.reload(); // Esta línea de código reiniciará la página si no se cumple la condición
} else if (numero1 < 50) { 
    alert("El número que elegiste es menor que 50");
}
else if (numero1 == 50) {
    alert ("El número que elegiste es 50")
}
else if (numero1 > 50) {
    alert("El número que elegiste es mayor que 50");
}

/*
    Observar como el valor mostrado de la varible bool esta en un color diferente al de la variable x aunque sus dos valores son true esto es
    porque bool tiene un valor de tipo boolean y x de tipo string

    typeof es un operador para encontrar el tipo de dato al que pertenece una variable en javascript
*/
let bool = true; // variable a la que le asignamos un valor booleano
let x = bool.toString(); // convertimos(parseamos) su valor de booleano a string(cadena de texto)
console.log(bool);  // mostramos el valor de la variable bool
console.log(typeof bool); // nos devuelve el tipo de dato de la variable bool
console.log(x); // mostramos el valor de la variable x
console.log(typeof x); // nos devuelve el tipo de dato de la variable x
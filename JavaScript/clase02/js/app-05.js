// >, <, >=, <= !=, ==, !==, === operadores relacionales o de comparación   
// !(not), ||(or), &&(and) operadores lógicos

// tipos de datos
let x = 5;            // Number      números enteros y decimales
let y = 5;
let z = "5";
let nombre = 'Yanel'; // String      candenas de texto
let bool = true;      // Booleans    valores boleanos true o false

x == y; // true
x === y; // true
x != y; // false
x !== y; // false
x !== z; // true

// The typeof operator returns the type of a variable or an expression. El operador typeof nos retorna el tipo de dato de una variable o expresión

// ==	igual (compara solo valores)                              5 == "5"      // true
// ===	igual (compara valor y tipo de dato)                      5 === 5     // true
// !=	no igual o distinto (compara solo valores)                5 != "5"      // false
// !==	no igual o distinto (compara valor o tipo de dato)        5 !== "5"     // True
// >	mayor que                                                 5 > "5"       // false
// <	menor que                                                 5 < "5"       // false
// >=	mayor o igual que                                         5 >= "5"      // true
// <=	menor o igual que                                         5 <= "5"      // true

// console.log(5 == "5");      // true
// console.log(5 === "5");     // false
// console.log(5 != "5");      // false
// console.log(5 !== "5");     // true
// console.log(5 > "5");       // false
// console.log(5 < "5");       // false
// console.log(5 >= "5");      // true
// console.log(5 <= "5");      // true

// console.log("");
// console.log(typeof x);
// console.log(typeof nombre);
// console.log(typeof bool);
// console.log(typeof y);
// console.log("valor Z: " + typeof z);

/*
// operadores lógicos

// && (And) se usa tanto en variables como en expresiones lógicas
    variable1    variable2       variable1 && variable2
       true         true                 true                       V && V = V           5 > 2 && 40 < 50    // true
       true         false                false                      V && F = F           5 > 2 && 40 < 30    // false
       false        true                 false                      F && V = F           5 == 2 && 40 == 40  // false
       false        false                false                      F && F = F           5 > 10 && 40 <= 20  // false

// || (Or) se usa tanto en variables como en expresiones lógicas
    variable1    variable2       variable1 || variable2
       true         true                 true                       V || V = V           5 > 2 || 40 < 50    // true
       true         false                true                       V || F = V           5 > 2 || 40 < 30    // true
       false        true                 true                       F || V = V           5 == 2 || 40 == 40  // true
       false        false                false                      F || F = F           5 > 10 || 40 <= 20  // false

// ! (not) se usa tanto en variables como en expresiones lógicas
    variable     !variable
      true         false                !true = false
      false        true                 !false = true
*/

// let nombreIngresado = prompt("Ingresar nombre");

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){ // EmA
//     alert("Hola Ema");
// }else{
//     alert("Error: Ingresar nombre valido");
// }

// otra version
// The toLowerCase() method converts a string to lowercase letters.
// The toUpperCase() method converts a string to uppercase letters.

let nombreIngresado = prompt("Ingresar nombre");
nombreIngresado = nombreIngresado.toLowerCase();
console.log("nombreIngresado: " + nombreIngresado);

if ((nombreIngresado != "") && (nombreIngresado == "yoelys")) {
    alert("Hola Yoelys");
} else {
    alert("Error: Ingresar nombre válido");
}
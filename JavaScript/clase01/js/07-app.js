/* birthdate, age, currentYear

========================
Ejercicio Práctico
========================
1 - Crear un prompt que solicite al usuario su año de nacimiento
2 - Calcular la edad del usuario.
    NOTA: 
    Para obtener la edad se resta el año actual con la el año de nacimiento.
3 - Mostrar haciendo uso de un alert la edad del usuario.

*/

let birthdate = prompt("Introduzca año de nacimiento:");
let age = 0;
let currentYear = 2021;

age = currentYear - birthdate;

alert("Tienes " + age + " años.");
console.log("Tienes " + age + " años.");
// console.log(age);
const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(typeof (numeros)); //object
console.log(numeros);
console.table(numeros);

// Acceder al arreglo
console.log(numeros[2]);
console.log(numeros[0]);
// console.log(numeros[20]); // Cuando trates de acceder a una posición dentro del arreglo que no existe devolverá el valor undefined
console.log(numeros[5]);
console.log(numeros[5][2]);
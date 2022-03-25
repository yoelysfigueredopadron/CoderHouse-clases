// for (let i = 1; i <= 10; i++) {
//     // alert(i);
//     console.log("valor i =", i);
// }

// for (let i = 1; i <= 1000; i+=100) {
//     // alert(i);
//     console.log("valor i =", i);
// }

// for (let i = 1; i <= 1000; i*=10) {
//     // alert(i);
//     console.log("valor i =", i);
// }

// ejemplo de la clase
// se incrementa i por 10 para calcular los multiplos de 10, 100, 1000. Hasta 1000 por la condición establecida i <= 1000
let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = 1; i <= 1000; i = i*10) {
    let resultado = ingresarNumero * i ;
    console.log("valor de ingresarNumero:", ingresarNumero);
    console.log("valor de i:", i);
    console.log(ingresarNumero +" X "+ i +" = "+ resultado)
}
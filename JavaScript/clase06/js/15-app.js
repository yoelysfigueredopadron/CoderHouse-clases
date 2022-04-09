// ejemplo1
// // Creamos un arreglo y lo mostramos en consola
// const frutas = ["Pera", "Naraja", "manzana", "Mango", "Sandía", "Banana"];
// console.log(frutas);
// console.log("El listado de frutas tiene " + frutas.length + " elementos");

// // JavaScript Template Literals     back-ticks (``)
// // Los literales de plantilla usan commillas inveritdas (``) en lugar de comillas ("") para definir una cadena:
// console.log(`El listado de frutas tiene ${frutas.length} elementos`);

// // Ordenamos el array(arreglo) frutas
// frutas.sort();
// console.log(frutas);

// // Invertimos el orden.
// frutas.reverse();
// console.log(frutas);


// ejemplo2
/*
Ordenando números
Por defecto, la función sort() ordena valores numericos(values) como si fueran cadenas de texto(strings)

Esto funciona para los strings ya que ("Banana" viene antes que "Pera") así como ("Mango" viene antes que "Manzana")

Esto aplicado a numeros en formato string ejemplo "25" es ordenar después de "100" ya que "2" es mayor que "1"

Por este motivo, el método sort() producirá resultados incorrectos cuando ordene números.
Esto lo podemos solucionar utilizando una función de conparación
*/

// const listOfNumbers = [40, 100, 1, 5, 25, 10];
// console.log(listOfNumbers);

// // ordenamos el array de listOfNumbers
// listOfNumbers.sort(function (a, b) { return a - b });
// console.log(listOfNumbers);

// listOfNumbers.sort(function (a, b) { return b - a });
// console.log(listOfNumbers);

/*
La función de comparación se usa con el objetivo de encontrar una alternativa del método ordenar para un arreglo con valores númericos.

La función de comparación debe de retornar un valor negativo, cero o positivo depentiendo de los argumentos.

                function(a, b){return a - b}

Cuando la función sort() compara dos valores, envía los valores a la función de comparación y ordena los valores deacuerdo a los valores retornados (negativo, cero, positivo)

si el resultado es negativo a es ordenado antes que b

si el resultado es positivo b es ordenado antes que a

si el resultado es 0 no se realizan cambios en el orden en que se encontraban los valores (dentro del arreglo)

Explicación
La función de comparación compara todos los valores en el arreglo(array), dos valores a la vez (a, b).
Cuando compara 40 y 100, el método sort() llama a la función comparar function(40, 100).
La función calcula 40 - 100 (a - b), como el resultado es negativo (-60), la función sort ordenará 40 como un valor menor que 100
*/


// Ejemplo 3
// Pueden utilizar este fragmento de código para experimentar con la clasificación numérica y alfabética:
// const listOfNumbers = [40, 100, 1, 5, 25, 10];

// function sortAlphabetically() {
//     listOfNumbers.sort();
//     document.getElementById("show").innerHTML = listOfNumbers;
// }

// function sortNumerically() {
//     listOfNumbers.sort(function (a, b) { return a - b });
//     document.getElementById("show").innerHTML = listOfNumbers;
// }


/*
Encontrando el valor máximo o mínimo dentro de un Array

No hay funciones integradas para encontrar el valor máximo o mínimo en una matriz(array).
Si ordenamos un Array podemos usar el índice para obtener el valor máximo y mínimo dentro del mismo
*/

// Ejemplo 4
// const listOfNumbers = [40, 100, 1, 5, 25, 10];
// console.log(listOfNumbers);

// // ordenamos el array de listOfNumbers
// listOfNumbers.sort(function (a, b) { return a - b });
// console.log(listOfNumbers);
// // ahora listOfNumbers[0] contiene el valor mínimo
// // Y listOfNumbers[listOfNumbers.length-1] contiene el valor máximo

// console.log("El valor mínimo del arreglo listOfNumbers es " + listOfNumbers[0] + ".");
// console.log("El valor máximo del arreglo listOfNumbers es " + listOfNumbers[listOfNumbers.length - 1] + ".");

// // JavaScript Template Literals
// console.log(`El valor mínimo del arreglo listOfNumbers es ${listOfNumbers[0]}.`);
// console.log(`El valor máximo del arreglo listOfNumbers es ${listOfNumbers[listOfNumbers.length - 1]}.`);

// // ordenamos el Array de forma descendente
// listOfNumbers.sort(function (a, b) { return b - a });
// console.log(listOfNumbers);
// // ahora listOfNumbers[0] contiene el valor máximo
// // Y listOfNumbers[listOfNumbers.length-1] contiene el valor mínimo

// console.log("El valor máximo del arreglo listOfNumbers es " + listOfNumbers[0]);
// console.log("El valor mínimo del arreglo listOfNumbers es " + listOfNumbers[listOfNumbers.length - 1]);

// // JavaScript Template Literals
// console.log(`El valor máximo del arreglo listOfNumbers es ${listOfNumbers[0]}`);
// console.log(`El valor mínimo del arreglo listOfNumbers es ${listOfNumbers[listOfNumbers.length - 1]}`);


// Ejemplo 5
// Ordenar un arreglo de objetos (Sorting Object Arrays)
// En JavaScript los arrays muchas veces contienen objetos

// Incluso si los objetos tienen propiedades de diferentes tipos de datos, se puede usar el método sort() para ordenar la matriz(arreglo).
// La solución es escribir una función de comparación para comparar los valores de las propiedades:

const cars = [{
    type: "Volvo",
    year: 2016,
    price: 90000,
    color: "blanco"
},
{
    type: "Saab",
    year: 2001,
    price: 80000,
    color: "azul"
},
{
    type: "BMW",
    year: 2010,
    price: 100000,
    color: "negro"
},
{
    type: "Renault",
    year: 2018,
    price: 200000,
    color: "gris"
},
{
    type: "Mercedes-Benz",
    year: 2017,
    price: 180000,
    color: "rojo"
}
];

displayCars();

cars.sort(function (a, b) { return a.year - b.year }); // Orden ascendente por año
cars.sort(function (a, b) { return b.year - a.year }); // Orden Descendente por año
cars.sort(function (a, b) { return a.price - b.price }); // Orden ascendente por precio
cars.sort(function (a, b) { return b.price - a.price }); // Orden Descendente por precio
cars.sort(function (a, b) { return (a.type < b.type) ? -1 : 1 }); // Orden ascendente por tipo(type)
cars.sort(function (a, b) { return (a.type > b.type) ? -1 : 1 }); // Orden Descendente por tipo(type)
cars.sort(function (a, b) { return (a.color < b.color) ? -1 : 1 }); // Orden ascendente por color
cars.sort(function (a, b) { return (a.color > b.color) ? -1 : 1 }); // Orden Descendente por color

displayCars();

function displayCars() {
    document.getElementById("mostrar2").innerHTML =
        cars[0].type + ", " + cars[0].year + ", $" + cars[0].price + ", " + cars[0].color + "<br>" +
        cars[1].type + ", " + cars[1].year + ", $" + cars[1].price + ", " + cars[1].color + "<br>" +
        cars[2].type + ", " + cars[2].year + ", $" + cars[2].price + ", " + cars[2].color + "<br>" +
        cars[3].type + ", " + cars[3].year + ", $" + cars[3].price + ", " + cars[3].color + "<br>" +
        cars[4].type + ", " + cars[4].year + ", $" + cars[4].price + ", " + cars[4].color;
}

// misma función con Template Literals
// function displayCars() {
//     document.getElementById("mostrar2").innerHTML = `
//         ${cars[0].type}, ${cars[0].year}, $${cars[0].price}, ${cars[0].color} <br>
//         ${cars[1].type}, ${cars[1].year}, $${cars[1].price}, ${cars[1].color} <br>
//         ${cars[2].type}, ${cars[2].year}, $${cars[2].price}, ${cars[2].color} <br>
//         ${cars[3].type}, ${cars[3].year}, $${cars[3].price}, ${cars[3].color} <br>
//         ${cars[4].type}, ${cars[4].year}, $${cars[4].price}, ${cars[4].color}
//     `;
// }
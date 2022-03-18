// ejemplo 1
let numero1 = "20";
let resultado = numero1 + 1; // Concatena porque un texto + un número como resultado final devuelve un texto "201"
let resultado2 = parseInt(numero1) + 1;

console.log(resultado);  // nos devuelve la cadena 201
console.log(resultado2); // nos devuelve el valor númerico 21

// ejemplo 2
let precioA = 10;
let precioB = 10;

const IVA105 = 1.105;
let resultadoSuma = (precioA + precioB) * IVA105;

console.log(resultadoSuma);
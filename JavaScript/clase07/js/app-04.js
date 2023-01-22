// Funciones de orden superior

// every
// let arrayNaN = [NaN, NaN, NaN].every(isNaN);

// every
// let arrayNaN2 = [5, NaN, false].some(isNaN);

// console.log(arrayNaN);
// console.log(arrayNaN2);

// ejemplo 1
// let total = 0;

// for (let i = 1; i <= 10; i++) {
// 	total += i;
// }

// console.log(total); //  55

// creamos la función de abstracción sumarRango()
// function sumarRango(valorInicial, valorFinal) {
// 	let total = 0;

// 	if (valorInicial > valorFinal) {
// 		alert(`:( Error, el primer parámetro tiene que ser menor o igual que el segundo. `);
// 		return total;
// 	}

// 	for (let i = valorInicial; i <= valorFinal; i++) {
// 		total += i;
// 	}

// 	return total;
// }

// console.log(sumarRango(1, 10)); // 55
// console.log(sumarRango(5, 10)); // 45
// console.log(sumarRango(100, 200)); // 15150
// console.log(sumarRango(100, 5)); // 0

// retornando funciones
// function mayorQue(n) {
// 	return (m) => m > n;
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12)); //  true
// console.log(mayorQueDiez(8)); //  false

// let mayorQueMil = mayorQue(1000);

// console.log(mayorQueMil(100)); // false
// console.log(mayorQueMil(1001)); // true
// console.log(mayorQueMil(1000)); // false

// asignar operación
// function asignarOperacion(operacion) {
// 	switch (operacion) {
// 		case 'sumar':
// 		case '+':
// 			return (a, b) => a + b;
// 		case 'restar':
// 		case '-':
// 			return (a, b) => a - b;
// 		case 'multiplicar':
// 		case '*':
// 			return (a, b) => a * b;
// 		case 'dividir':
// 		case '/':
// 			return (a, b) => a / b;
// 		default:
// 			return alert(':( Error, operador no válido.');
// 	}
// }

// let suma = asignarOperacion('sumar');
// let sumaConSigno = asignarOperacion('+');
// let resta = asignarOperacion('restar');
// let restaConSigno = asignarOperacion('-');
// let multiplicar = asignarOperacion('multiplicar');
// let multiplicarConSigno = asignarOperacion('*');
// let dividir = asignarOperacion('dividir');
// let dividirConSigno = asignarOperacion('/');

// console.log(suma(4, 6)); //  10
// console.log(sumaConSigno(6, 6)); //  12
// console.log(resta(5, 3)); //  2
// console.log(restaConSigno(10, 100)); //  -90
// console.log(multiplicar(5, 3)); //  15
// console.log(multiplicarConSigno(10, 100)); //  1000
// console.log(dividir(10, 2)); //  5
// console.log(dividirConSigno(1000, 10)); //  100

// Recibir funciones por parámetros
function porCadaUno(arr, fn) {
	for (const el of arr) {
		fn(el);
	}
}

const numeros = [5, 6, 7, 8];

// porCadaUno(numeros, console.log);
// porCadaUno(numeros, alert);

const duplicado = [];

// usando arrow function como parámetros
porCadaUno(numeros, (el) => duplicado.push(el * 2));

console.log(duplicado);

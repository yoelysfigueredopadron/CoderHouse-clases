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

// const numeros = [5, 6, 7, 8];

// porCadaUno(numeros, console.log);
// porCadaUno(numeros, alert);

const duplicado = [];

// usando arrow function como parámetros
// porCadaUno(numeros, (el) => duplicado.push(el * 2));

// console.log(duplicado);

// Métodos de búsqueda y transformación
// forEach -> recorre cada elemento del arreglo ejecutando sobre cada elemento iterado la función
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// numeros.forEach((num) => console.log(num));

// Find -> recibe una función de comparación como parámetro, si la condición de la función de busqueda devuelve true nos retornará el primer elemento encontrado en caso contrario nos devolverá undefined
const cursos = [
	{ nombre: 'Desarrollo Web', precio: 10000 },
	{ nombre: 'Javascript', precio: 15000 },
	{ nombre: 'Vue JS', precio: 17000 },
	{ nombre: 'Angular JS', precio: 22000 },
	{ nombre: 'React JS', precio: 25000 },
	{ nombre: 'Node JS', precio: 30000 },
	{ nombre: 'Java', precio: 35000 },
	{ nombre: 'Python', precio: 32000 },
	{ nombre: 'C#', precio: 38000 }
];

// const resultadoBusquedad1 = cursos.find((curso) => curso.nombre === 'Javascript');
// const resultadoBusquedad2 = cursos.find((curso) => curso.nombre === 'Node JS');
// const resultadoBusquedad3 = cursos.find((curso) => curso.precio === 25000);
// const resultadoBusquedad4 = cursos.find((curso) => curso.precio > 15000);
// const resultadoBusquedad5 = cursos.find((curso) => curso.precio >= 15000);

// console.log(resultadoBusquedad1);
// console.log(resultadoBusquedad2);
// console.log(resultadoBusquedad3);
// console.log(resultadoBusquedad4);
// console.log(resultadoBusquedad5);

// filter recibe una función de comparación por parámetro y retorna un nuevo array con todos los elementos que cumplan una condición, si no hay coincidencias retornará un array vacío

// operadores relacionales o de comparación (>, >=, <, <=, ==, ===, !=, !==)
// https://www.w3schools.com/js/js_operators.asp
// const resultadoFiltrado1 = cursos.filter((curso) => curso.nombre.includes('JS'));
// const resultadoFiltrado2 = cursos.filter((curso) => curso.nombre.includes('script'));
// const resultadoFiltrado3 = cursos.filter((curso) => curso.nombre.includes('Java'));
// const resultadoFiltrado4 = cursos.filter((curso) => curso.precio === 38000);
// const resultadoFiltrado5 = cursos.filter((curso) => curso.precio > 15000);
// const resultadoFiltrado6 = cursos.filter((curso) => curso.precio >= 15000);

// console.log(resultadoFiltrado1);
// console.log(resultadoFiltrado2);
// console.log(resultadoFiltrado3);
// console.log(resultadoFiltrado4);
// console.log(resultadoFiltrado5);
// console.log(resultadoFiltrado6);

// Some método que retorna true o false si se encuentra un elemento dentro del array
const existeAlguno = cursos.some((curso) => curso.nombre == 'Python');
const existeAlguno2 = cursos.some((curso) => curso.nombre == 'CSS');

// console.log(existeAlguno);
// console.log(existeAlguno2);

// Map devuelve un nuevo array con los elementos transformados según las operaciones de la función pasadas por parámetro, no modifica el array original.

const nombreCursos = cursos.map((curso) => curso.nombre);
// console.log(nombreCursos);

// Actualizando precio
const cursosPrecioActualizado = cursos.map((curso) => {
	return {
		nombre: curso.nombre,
		precio: curso.precio * 1.25 * 1.21
	};
});

// console.log(cursosPrecioActualizado);

// Reduce nos permite obtener un único valor iterando sobre el array
const arrayNumeros = [10, 20, 30, 40, 50, 60];
const total = arrayNumeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

// console.log(total); // 210

// obtenemos el total de los cursos
const totalAPagar = cursos.reduce((total, curso) => total + curso.precio, 0);
// console.log(totalAPagar);

const totalAPagarPreciosNuevos = cursosPrecioActualizado.reduce((total, curso) => total + curso.precio, 0);
// console.log(totalAPagarPreciosNuevos);

// Sort es un método para ordenar un arrary, este método es destructivo por lo cual modifica el array original
const numeros2 = [40, 1, 5, 200];
// numeros2.sort((a, b) => a - b); // [ 1, 5, 40, 200 ] Ascendete
// numeros2.sort((a, b) => b - a); // [ 200, 40, 5, 1 ] Descendente

// console.log(numeros2);

const copyNumeros2 = numeros2;
copyNumeros2.sort((a, b) => a - b); // [ 1, 5, 40, 200 ] Ascendete
numeros2.sort((a, b) => b - a); // [ 200, 40, 5, 1 ] Descendente

// console.log(copyNumeros2);

const items = [
	{ name: 'Pikachu', price: 21 },
	{ name: 'Charmander', price: 37 },
	{ name: 'Pidgey', price: 45 },
	{ name: 'Squirtle', price: 60 }
];

// ordenando strings de forma ascendente
// items.sort((a, b) => {
// 	if (a.name > b.name) {
// 		return 1;
// 	}

// 	if (a.name < b.name) {
// 		return -1;
// 	}

// 	// a es igual a b
// 	return 0;
// });

// ordenando strings de forma descendente
items.sort((a, b) => {
	if (a.name < b.name) {
		return 1;
	}

	if (a.name > b.name) {
		return -1;
	}

	// a es igual a b
	return 0;
});

// https://elcodigoascii.com.ar/
console.log(items);

// Funciones de orden superior
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
// function porCadaUno(arr, fn) {
// 	for (const el of arr) {
// 		fn(el);
// 	}
// }

// const numeros = [5, 6, 7, 8];

// porCadaUno(numeros, console.log);
// porCadaUno(numeros, alert);

// const duplicado = [];

// usando arrow function como parámetros
// porCadaUno(numeros, (el) => duplicado.push(el * 2));

// console.log(duplicado);

// Métodos de búsqueda y transformación
// forEach -> recorre cada elemento del arreglo ejecutando sobre cada elemento iterado la función
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

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
// const existeAlguno = cursos.some((curso) => curso.nombre == 'Python');
// const existeAlguno2 = cursos.some((curso) => curso.nombre == 'CSS');

// console.log(existeAlguno);
// console.log(existeAlguno2);

// Map devuelve un nuevo array con los elementos transformados según las operaciones de la función pasadas por parámetro, no modifica el array original.

// const nombreCursos = cursos.map((curso) => curso.nombre);
// console.log(nombreCursos);

// Actualizando precio
// const cursosPrecioActualizado = cursos.map((curso) => {
// 	return {
// 		nombre: curso.nombre,
// 		precio: curso.precio * 1.25 * 1.21
// 	};
// });

// console.log(cursos);
// console.log(cursosPrecioActualizado);

// Reduce nos permite obtener un único valor iterando sobre el array
// const arrayNumeros = [10, 20, 30, 40, 50, 60];
// const total = arrayNumeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

// console.log(total); // 210

// obtenemos el total de los cursos
// const totalAPagar = cursos.reduce((total, curso) => total + curso.precio, 0);
// console.log(totalAPagar);

// const totalAPagarPreciosNuevos = cursosPrecioActualizado.reduce((total, curso) => total + curso.precio, 0);
// console.log(totalAPagarPreciosNuevos);

// Sort es un método para ordenar un arrary, este método es destructivo por lo cual modifica el array original
// const numeros2 = [40, 1, 5, 200];
// numeros2.sort((a, b) => a - b); // [ 1, 5, 40, 200 ] Ascendete
// numeros2.sort((a, b) => b - a); // [ 200, 40, 5, 1 ] Descendente

// console.log(numeros2);

// const copyNumeros2 = numeros2;
// copyNumeros2.sort((a, b) => a - b); // [ 1, 5, 40, 200 ] Ascendete
// numeros2.sort((a, b) => b - a); // [ 200, 40, 5, 1 ] Descendente

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
// items.sort((a, b) => {
// 	if (a.name < b.name) {
// 		return 1;
// 	}

// 	if (a.name > b.name) {
// 		return -1;
// 	}

// 	// a es igual a b
// 	return 0;
// });

// Como curiosidad les dejo que el código ASCII es el que ayuda a determinar que carácter de una cadena de texto va primero determinando cual es menor o mayor para ordernar o realizar comparaciones a través de este código. Link de referencia -> https://elcodigoascii.com.ar/
console.log(items);

// objeto Math
// constantes matemáticas Euler y PI
// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793

// Min y Max recib en una lista de argumentos númericos y devuelven el valor máximo o mínimo segun el método utilizado
let a = Math.min(5, 10);
let b = Math.min(0, 150, 30, 20, 38);
let c = Math.min(-5, 10);
let d = Math.min(-5, -10);
let e = Math.min(1.5, 2.5);

// console.log('Valores mínimos:');
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

let f = Math.max(5, 10);
let g = Math.max(0, 150, 30, 20, 38);
let h = Math.max(-5, 10);
let i = Math.max(-5, -10);
let j = Math.max(1.5, 2.5);

// console.log('\nValores máximos');
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);

// Infinito es un número que representa el infinito positivo o negativo de un número
// Un número alcanza el Infinity cuando supera el límite superior de un número: 1.797693134862315E+308.
// Un número llega a -Infinity cuando supera el límite inferior de un número: -1.797693134862316E+307.
// console.log(Math.max(55, Infinity, 0, -25, 93, 4)); // Infinity
// console.log(Math.min(55, 13, 0, -Infinity, 93, 4)); // -Infinity

// ejemplo infinito positivo
let x = 1.797693134862315e308;
let y = x * 1.001;
// console.log('Infinito positivo');
// console.log('x = ' + x);
// console.log('y = ' + y);

// ejemplo infinito negativo
let x1 = -1.797693134862316e307;
let y1 = x1 * 1.001;
// console.log('\nInfinito negativo');
// console.log('x1 = ' + x1);
// console.log('y1 = ' + y1);

// ceil metodo que redondea hacia el entero superior más próximo
let a1 = Math.ceil(0.6);
let b1 = Math.ceil(0.4);
let c1 = Math.ceil(5);
let d1 = Math.ceil(5.1);
let e1 = Math.ceil(-5.1);
let f1 = Math.ceil(-5.9);

// console.log(a1);
// console.log(b1);
// console.log(c1);
// console.log(d1);
// console.log(e1);
// console.log(f1);

// floor método que redondea hacia el entero inferior más próximo
let a2 = Math.floor(0.6);
let b2 = Math.floor(0.4);
let c2 = Math.floor(5);
let d2 = Math.floor(5.1);
let e2 = Math.floor(-5.1);
let f2 = Math.floor(-5.9);

// console.log(a2);
// console.log(b2);
// console.log(c2);
// console.log(d2);
// console.log(e2);
// console.log(f2);

// Round redondea el valor
let a3 = Math.round(2.6);
let b3 = Math.round(2.5);
let c3 = Math.round(2.49);
let d3 = Math.round(-2.6);
let e3 = Math.round(-2.5);
let f3 = Math.round(-2.49);

// console.log(a3);
// console.log(b3);
// console.log(c3);
// console.log(d3);
// console.log(e3);
// console.log(f3);

// raíz cuadrada Math.sqrt() Si se le envía un número negativo, el método retorna NaN.
let a4 = Math.sqrt(0);
let b4 = Math.sqrt(1);
let c4 = Math.sqrt(9);
let d4 = Math.sqrt(64);
let e4 = Math.sqrt(-9);

// console.log(a4);
// console.log(b4);
// console.log(c4);
// console.log(d4);
// console.log(e4);

// Math.random() genera un número aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.

// random en entre 0 y 1
let a5 = Math.random();

// random entre 0 y 10
let b5 = Math.random() * 10;

// random entre 0 y 100
let c5 = Math.random() * 100;

// random entre 1 y 10
let d5 = Math.floor(Math.random() * 10 + 1);

// random entre 1 y 100
let e5 = Math.floor(Math.random() * 100 + 1);

// console.log(a5);
// console.log(b5);
// console.log(c5);
// console.log(d5);
// console.log(e5);

const generadorNumero = () => {
	return Math.round(Math.random() * 100);
};

// console.log(generadorNumero());

// clase Date
// Instanciar un objeto Date
// console.log(new Date());

// otros ejemplos
//En la construcción de fechas los meses comienzan en 0 = Enero y terminan en 11 = diciembre
// console.log(new Date(2020, 1, 15));
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
// console.log(casiNavidad);
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

const casiNavidad1 = new Date('December 25, 2021 23:59:59');
// console.log(casiNavidad1);
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

const hoy = new Date('December 17, 2021');

// console.log(hoy.toDateString()); // Fri Dec 17 2021
// console.log(hoy.toLocaleString()); // 17/12/2021 00:00:00
// console.log(hoy.toLocaleDateString()); // 17/12/2021
// console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)

// console.log(hoy.getMonth()); // mes 11 (diciembre)
// console.log(hoy.getFullYear()); // año
// console.log(hoy.getDay()); // dia de la semana 5 (viernes)

// calcular diferecia entre fechas devuelve el resultado en milisegundos
// const navidad = new Date('December 25, 2021');
// const hoy1 = new Date('December 17, 2021');

// console.log(navidad - hoy1); // 691200000

// const milisegundosPorDia = 86400000;

// console.log((navidad - hoy1) / milisegundosPorDia); // 8

// Ejemplos de diferencias entre fechas
const inicio = new Date();

// for (let i = 0; i < 1000; i++) {
// 	console.log('haciendo tiempo');
// }

const final = new Date();

// console.log('El proceso tardó: ' + (final - inicio) + ' milisegundos');
// El proceso tardó: 396 milisegundos

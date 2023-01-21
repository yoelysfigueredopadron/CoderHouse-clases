// Declaración de array vacío
const arreglo = [];

// Arreglo de números
const arregloNumerico = [10, 25, 32, 43, 56, 61, 78];

// Arreglo de strings(cadena de carácteres)
const familiaSimpson = ['Homero', 'Marge', 'Lisa', 'Maggie', 'Bart'];

// Arreglo de valores booleanos
const valoresBooleanos = [true, true, false, true, false, false];

// Arreglo mixto(con diferentes tipos de datos)
const arregloMixto = [100, true, 'Yoelys'];

// console.log(arreglo);
// console.log(arregloNumerico);
// console.log(familiaSimpson);
// console.log(valoresBooleanos);
// console.log(arregloMixto);

// Para acceder posiciones de un arreglo lo hacemos a través de sus indices
// console.log(arregloNumerico[0]);
// console.log(arregloNumerico[4]);

// al tratar de acceder a una posición que no existe en el array no va a devolver undefined
// console.log(arregloNumerico[7]);

let suma, suma2;
// suma = arregloNumerico[0] + arregloNumerico[4];

// console.log(`${arregloNumerico[0]} + ${arregloNumerico[4]} = ${suma}`);

// Esta operación al sumar con un valor del arreglo en una posición que no existe va a devolver NaN  "Not-a-Number"
// suma2 = arregloNumerico[0] + arregloNumerico[7];

// console.log(arregloNumerico[7]); // undefined
// console.log(suma2);
// console.log(`${arregloNumerico[0]} + ${arregloNumerico[7]} = ${suma2}`);

let mensaje = `${familiaSimpson[0]} ama a su esposa ${familiaSimpson[1]} junto a sus hijos ${familiaSimpson[2]}, ${familiaSimpson[3]} y ${familiaSimpson[4]}.`;

// console.log(mensaje);

// Recorriendo un array
// for (let i = 0; i < 7; i++) {
// 	console.log(arregloNumerico[i]);
// }

// for (let i = 0; i < arregloNumerico.length; i++) {
// 	console.log(`arregloNumerico[${i}]: ${arregloNumerico[i]}`);
// }

// console.log('Familia Simpson:');
// for (let i = 0; i < familiaSimpson.length; i++) {
// 	// console.log(familiaSimpson[i]);
// 	// console.log(i + 1 + '- ' + familiaSimpson[i]); // creando un listado concatenando

// 	// JavaScript Template Literals https://www.w3schools.com/js/js_string_templates.asp
// 	console.log(`${i + 1}- ${familiaSimpson[i]}`); // usando los bacticks sinonimo de crear template literals
// }

// console.log(`Cantidad de elementos dentro del arreglo numerico: ${arregloNumerico.length}`);

// \n agrega un salto de linea
// console.log(`\nCantidad de personas en la familia Simpson: ${familiaSimpson.length}`);

// Cambiando el valor de un elemento en el arreglo
// Modificaremos la posición 2 en el arreglo mixto el mismo es el último elemento de arreglo y contiene el nombre 'Yoelys' y lo vamos a modificar por 'Juan'
// console.log(`arregloMixto[2]: ${arregloMixto[2]}`);
// console.log('Ahora cambiamos el valor de arregloMixto[2]');
// arregloMixto[2] = 'Juan';
// console.log(`arregloMixto[2]: ${arregloMixto[2]}`);

// Agregando nuevos elemento en el arreglo con el método push(), los nuevos elementos se agregarán al final
// console.log(arregloMixto);

arregloMixto.push('Coderhouse');
arregloMixto.push(48);
arregloMixto.push(false);
arregloMixto.push('javascript');

// console.log(arregloMixto);

// El método unshift() agrega un elemento al inicio de arreglo
arregloMixto.unshift('Nuevo elemento');
// console.log(arregloMixto);

// Método shift() elimina el primer elemento dentro del arreglo
arregloMixto.shift();
// console.log(arregloMixto);

// Método pop() elimina el último elemento en el arreglo
arregloMixto.pop();
// console.log(arregloMixto);

// Splice() método que permite eliminar o agregar uno o varios elementos de un array pasando 2 parámetros (indice, cantidad)

// eliminado elementos con splice(), si queremos eliminar elementos en el parámetro cantidad debemos pasar un parámetro mayor que 0. Opcionalmente se pueden agregar más parámetros después de cantidad si se desea agregar nuevos elementos, si estos se omiten no de agregarán elementos con lo cual solo se eliminarán los especificados por los parámetros (indice, cantidad)
arregloMixto.splice(0, 2);
arregloMixto.splice(2, 2);
// console.log(arregloMixto);

// agregando elementos con splice(), si queremos agregar elementos el valor de cantidad debe ser 0
// después del parámetro cantidad se agregan los que deseamos agregar ejemplo ('React JS', 'Angular JS', 'Vue JS', 'Node JS')
arregloMixto.splice(1, 0, 'React JS', 'Angular JS', 'Vue JS', 'Node JS');
// console.log(arregloMixto);

// El método splice() devuelve un array con los elementos eliminados, ejemplo
let elementosEliminados = arregloMixto.splice(2, 2);
// console.log(`Elementos eliminados: (${elementosEliminados})`);

// console.log(`Nuevo arreglo: (${arregloMixto})`);

// join() unimos todos los elementos del array con el parámetro especificado
// console.log(arregloMixto.join());
// console.log(arregloMixto.join(', '));
// console.log(arregloMixto.join(' - '));

// concat() podemos concatenar dos o más arrays
const perros = ['Pupy', 'Ronnie'];
const gatos = ['Mishi', 'Garfield', 'Zuri'];
const otrosAnimales = ['Leon', 'Tigre', 'Tibrón'];

// const mascotas = perros.concat(gatos);
// console.log(mascotas);

// const listaAnimales = otrosAnimales.concat(perros.concat(gatos));
// console.log(listaAnimales);

// slice() método que devuelve una parte del array con la cual obtenemos uno nuevo, los parámetros son dos e indican el inicio y el fin pero el segundo parámetro final no se incluyen en los resultados. No modifica el array original
// const cursos = arregloMixto.slice(1, 3); // no devuelve el elemento indice 3
// console.log(cursos);

// indexOf devuelve el indice de la primera del primer elemento encontrado o devuelve -1 en caso de no encontrar el elemento en el array.
// console.log(arregloMixto.indexOf('React JS'));
// console.log(arregloMixto.indexOf('React js'));
// console.log(arregloMixto.indexOf('React'));
// console.log(arregloMixto.indexOf('Angular JS'));
// console.log(arregloMixto.indexOf('Coderhouse'));

// si el elemento se encuentra más de una vez devuelve un elemento devuelve el indice del primero encontrado
// arregloMixto.push('React JS');
// console.log(arregloMixto);
// console.log(arregloMixto.indexOf('React JS'));

// incluydes() devuelve un valor booleano (true/false) tomando un parámetro de entra que se buscará dentro del arreglo si es encontrado devuelve true en caso contrario devuelve false
// console.log(arregloMixto.includes('React JS'));
// console.log(arregloMixto.includes('React js'));
// console.log(arregloMixto.includes('React'));
// console.log(arregloMixto.includes('Angular JS'));
// console.log(arregloMixto.includes('Coderhouse'));

// reverse() método que invierte el orden del array, este método sobreescribe el array original
// arregloMixto.reverse();
// console.log(arregloMixto);

//-----------------------------------------------------------------------------
// Ejemplos practico Cargar Array con entradas utilizando prompt()
// const listaDeFrutas = [];
// let cantidad = 3;

// alert('Vamos a ingresar 3 frutas en la lista:');

// do {
// 	let fruta = prompt('Ingresa una fruta:');
// 	listaDeFrutas.push(fruta);
// 	console.log(listaDeFrutas);
// } while (listaDeFrutas.length != cantidad);

// const nuevaListaDeFrutas = listaDeFrutas.concat('Mango', 'kiwi', 'Anana');
// console.log(nuevaListaDeFrutas);

// alert(nuevaListaDeFrutas.join('\n'));

// // Eliminar un elemento de la nueva lista de frutas
// const eliminar = (fruta) => {
// 	let posicion = nuevaListaDeFrutas.indexOf(fruta);

// 	if (posicion != -1) {
// 		nuevaListaDeFrutas.splice(posicion, 1);
// 	}
// };

// eliminar('kiwi');

// alert(nuevaListaDeFrutas.join('\n'));
// 2;
// -------------------------------------------------------------------------

// Arreglo de objetos
// const producto1 = { id: 1, nombre: 'Arroz', precio: 50, cantidad: 1, descripcion: 'Es un buen producto' };

// let productos = [];

// productos = [producto1, { id: 2, nombre: 'Tomate', precio: 80, cantidad: 2, descripcion: 'Es muy saludable para acompañar las comidas' }];

// productos.push({ id: 3, nombre: 'Carne', precio: 800, cantidad: 1, descripcion: 'Proteina de alta calidad' });

// console.log(producto1);
// console.log(productos);

// -------------------------------------------------------------------------
// otra forma de crear el arreglo de objetos

// let productos = [
// 	{ id: 1, nombre: 'Arroz', precio: 50, cantidad: 1, descripcion: 'Es un buen producto' },
// 	{ id: 2, nombre: 'Tomate', precio: 80, cantidad: 2, descripcion: 'Es muy saludable para acompañar las comidas' },
// 	{ id: 3, nombre: 'Carne', precio: 800, cantidad: 1, descripcion: 'Proteina de alta calidad' }
// ];

// console.log('Listado de productos:');
// for (const producto of productos) {
// 	console.log(`ID: ${producto.id}`);
// 	console.log(`Nombre: ${producto.nombre}`);
// 	console.log(`Precio: ${producto.precio}`);
// 	console.log(`Cantidad: ${producto.cantidad}`);
// 	console.log(`Descripción: ${producto.descripcion}`);
// 	console.log('');
// }

// for (const producto of productos) {
// 	console.log(`ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCantidad: ${producto.cantidad}\nDescripción: ${producto.descripcion}\n\n`);
// }

// ejemplo agregando objetos a un array con una clase
class Producto {
	constructor(id, nombre, precio, cantidad, descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.precio = Number(precio);
		this.cantidad = Number(cantidad);
		this.descripcion = descripcion;
		this.vendido = false;
		this.subtotal = 0;
	}

	sumaIva() {
		this.precio = this.precio * 1.21;
	}
}

//Declaramos un array de productos para almacenar los objetos
const productos = [];

productos.push(new Producto(1, 'Arroz', '50', '2', 'Es un buen producto'));
productos.push(new Producto(2, 'Tomate', '80', '5', 'Es muy saludable para acompañar las comidas'));
productos.push(new Producto(3, 'Carne', '800', '1', 'Proteina de alta calidad'));

console.log(productos);

// creamos una función para actualizar el IVA de los productos y luego calcula el subtotal
function subtotal() {
	for (const producto of productos) {
		producto.sumaIva();
		producto.subtotal = producto.precio * producto.cantidad;
		producto.vendido = true;
	}
}

subtotal();

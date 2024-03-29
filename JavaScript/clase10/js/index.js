// El método setItem es una función que pertenece al objeto localStorage en JavaScript. Esta función permite agregar o actualizar un par clave-valor en el almacenamiento local del navegador.

// localStorage.setItem('bienvenida', '¡Hola Coder!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

// getItem es un método en JavaScript que pertenece al objeto localStorage y al objeto sessionStorage. Este método permite obtener el valor asociado a una clave específica en el almacenamiento local del navegador.

// let mensaje = localStorage.getItem('bienvenida');
// let bandera = localStorage.getItem('esValido');
// let numero = localStorage.getItem('unNumero');

// console.log(mensaje);
// console.log(bandera);
// console.log(numero);

// sessionStorage.setItem('seleccionados', [1, 2, 3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');

// let listaNumeros = sessionStorage.getItem('seleccionados').split(',');
// let valorBoolean = sessionStorage.getItem('esValido') == 'true';
// let email = sessionStorage.getItem('email');

// console.log(typeof listaNumeros); //object ["1","2","3"];
// console.log(listaNumeros);
// console.log(typeof valorBoolean); //boolean;
// console.log(valorBoolean);
// console.log(typeof email); //string;
// console.log(email);

// Ciclo FOR para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
// 	let clave = localStorage.key(i);
// 	console.log('Clave: ' + clave);
// 	console.log('Valor: ' + localStorage.getItem(clave));
// }

// for (let i = 0; i < sessionStorage.length; i++) {
// 	let clave = sessionStorage.key(i);
// 	console.log(`Clave: ${clave}`);
// 	console.log(`Valor: ${sessionStorage.getItem(clave)}`);
// }

// El método removeItem elimina una llave(key) y clear elimina toda la información tanto en localStorage como en sessionStorage
// localStorage.removeItem('bienvenida');
// localStorage.removeItem('esValido');
// localStorage.removeItem('unNumero');

// sessionStorage.removeItem('seleccionados');
// sessionStorage.removeItem('email');
// sessionStorage.removeItem('esValido');

// localStorage.clear();
// sessionStorage.clear();

// Almacenar objetos en storage
// const producto1 = { id: 1, nombre: 'Queso', precio: 200, cantidad: 1 };
// // localStorage.setItem('producto', producto1); // devuelve [object Object]

// Guarda una clave
// localStorage.numeroPrueba = 5;

//Leer una clave
// alert(localStorage.numeroPrueba); // 5

// no se puede usar palabras reservadas del lenguaje para crear keys en localStorage o sessionStorage
// let clave = 'toString'; //toString método reservado
// localStorage[clave] = '6'; //No se guarda este dato

// JSON.stringify transformar un objeto JavaScript a un string en formato JSON
// const producto1 = { id: 1, nombre: 'Queso', precio: 200, cantidad: 1 };
// const objetoJson = JSON.stringify(producto1);

// console.log(objetoJson);
// console.log(typeof producto1);
// console.log(typeof objetoJson);

// localStorage.setItem('producto', objetoJson);
// sessionStorage.setItem('producto', objetoJson);

// JSON.parse transformar un string en formato JSON a objeto JavaScript
// const objetoJson2 = '{"id":1,"nombre":"Queso","precio":200,"cantidad":1}';
// const objetoProducto = JSON.parse(objetoJson2);

// console.log(objetoProducto);
// console.log(typeof objetoJson2);
// console.log(typeof objetoProducto);

// console.log('Información del producto:');
// console.log(`ID: ${objetoProducto.id}`);
// console.log(`Nombre: ${objetoProducto.nombre}`);
// console.log(`Precio ${objetoProducto.precio}`);
// console.log(`Cantidad: ${objetoProducto.cantidad}`);

// const producto2 = JSON.parse(localStorage.getItem('producto'));
// console.log(producto2);
// console.log(`ID: ${producto2.id} \nNombre: ${producto2.nombre} \nPrecio: ${producto2.precio} \nCantidad: ${producto2.cantidad}`);

// almacenar array de objetos
const productos = [
	{ id: 1, producto: 'Arroz', precio: 125 },
	{ id: 2, producto: 'Fideo', precio: 70 },
	{ id: 3, producto: 'Pan', precio: 50 },
	{ id: 4, producto: 'Flan', precio: 100 }
];

const guardarLocalStorage = (clave, valor) => {
	localStorage.setItem(clave, valor);
};

// Almacenar producto por producto
// for (const producto of productos) {
// 	guardarLocalStorage('Producto' + producto.id, JSON.stringify(producto));
// }

guardarLocalStorage('ListaDeProductos', JSON.stringify(productos));

class Producto {
	constructor(obj) {
		this.nombre = obj.producto.toUpperCase();
		this.precio = parseFloat(obj.precio);
	}

	sumaIva() {
		this.precio = this.precio * 1.21;
	}
}

// Obtenemos el listado de productos almacenado
const productosAlmacenados = JSON.parse(localStorage.getItem('ListaDeProductos'));
const arregloProductos = [];

// Iteramos productosAlmacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of productosAlmacenados) arregloProductos.push(new Producto(objeto));

// Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of arregloProductos) {
	producto.sumaIva();
}

// console.log(arregloProductos);

// recuperar estados previos de localStorage
let usuario;
// let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'));
let usuarioEnLS = localStorage.getItem('usuario');

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
// if (usuarioEnLS) {
// 	usuario = usuarioEnLS;
// } else {
// 	usuario = prompt('Ingrese su nombre de usuario');

// 	if (usuario !== null) {
// 		localStorage.setItem('usuario', usuario);
// 	}
// }

// almacenar array de objetos
let carrito = [];
let carritoEnLS = JSON.parse(localStorage.getItem('ListaDeProductos'));

if (carritoEnLS) {
	carrito = carritoEnLS;
	console.log(carrito);
}

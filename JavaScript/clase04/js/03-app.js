// las funciones del archivo 02-app.js las convertimos en funciones anónimas
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
	'Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido númerico'
);

// cuando se utiliza funciones anónimas así como funciones flechas => no se puede llamar a la función hasta no asignarle un valor ya que la misma estará almacenada dentro de una variable o constante y estás no pueden ser utilizadas antes de recibir un valor de lo contrario obtendremos un error de inicialización como el que les muestra a continuación  03-app.js:11 Uncaught ReferenceError: Cannot access 'ingresarPrecio' before initialization
// ingresarPrecio();

// Declaramos las Funciones anónimas
const ingresarPrecio = function () {
	precioProducto = Number(
		prompt('Ingrese el precio del producto' + (contador + 1) + ':')
	);

	while (precioProducto > 0) {
		gastoTotal = calcularTotal(precioProducto);
		contador++; // contador += 1       contador = contador + 1
		precioProducto = Number(
			prompt('Ingrese el precio del producto' + contador + ':')
		);
	}

	if (precioProducto <= 0) {
		console.log('Ha terminado de introducir los precios de los productos');
	}

	// también se puede llamar la función mostrarTotal() dentro de la función ingresarPrecio() siguiendo la lógica del algoritmo que esten realizando para llamarla en el momento que se necesita acorde al flujo de ejecución del programa
	mostrarTotal();
};

const calcularTotal = function (precioProducto) {
	return gastoTotal + precioProducto;
};

const mostrarTotal = function () {
	console.log('Cantidad de productos: ' + contador);
	console.log('El precio total es $' + gastoTotal);
	console.log('El precio total es $', gastoTotal);
};

ingresarPrecio(); // llamamos o invocamos la función
// mostrarTotal(); // llamamos o invocamos la función

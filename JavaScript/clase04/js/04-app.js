// las funciones del archivo 02-app.js las convertimos en funciones flecha(arrow functions) =>
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
	'Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor númerico no válido'
);

// cuando usamos arrow functions => no tenemos que usar la palabra reservada return cuando estás devuelven un valor ya que la acción de esa palabra está implicita en la función =>
const ingresarPrecio = () => {
	precioProducto = Number(
		prompt('Ingrese el precio del producto' + (contador + 1) + ':')
	);

	while (precioProducto > 0) {
		gastoTotal = calcularTotal(precioProducto);
		contador++;
		precioProducto = Number(
			prompt('Ingrese el precio del producto' + (contador + 1) + ':')
		);
	}

	if (precioProducto <= 0) {
		console.log('Ha terminado de introducir los precios de los productos');
	}

	mostrarTotal();
};

const calcularTotal = (precioProducto) => gastoTotal + precioProducto;

const mostrarTotal = () => {
	console.log('Cantidad de productos: ' + contador);
	console.log('El precio total es $' + gastoTotal);
};

// Invocación o llamada a las funciones
ingresarPrecio();

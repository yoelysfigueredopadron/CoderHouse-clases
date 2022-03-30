// Calcular costo total de productos y/o servicios seleccionados por el usuario.
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor númerico no válido");

// Es importante se entienda que las funciones tienen que estar declaradas par ser llamadas y pueden ser llamadas tanto antes de la declaración de las funciones como después de las mismas gracias al Hoisting para mayor información investigar en el sitio https://www.w3schools.com/js/js_hoisting.asp

// // Invocación o llamada a las funciones
// ingresarPrecio();
// mostrarTotal();


function ingresarPrecio() {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
    }

    if (precioProducto <= 0) {
        console.log("Ha terminado de introducir los precios de los productos");
    }
}

function calcularTotal(precioProducto) {
    return gastoTotal + precioProducto;
}

function mostrarTotal() {
    console.log("Cantidad de productos: " + contador);
    console.log("El precio total es $" + gastoTotal);
}

// Invocación o llamada a las funciones
ingresarPrecio();
mostrarTotal();
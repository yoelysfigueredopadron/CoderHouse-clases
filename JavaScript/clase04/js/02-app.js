// Calcular costo total de productos y/o servicios seleccionados por el usuario.
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido númerico");

ingresarPrecio(); // llamamos o invocamos la función
mostrarTotal(); // llamamos o invocamos la función

// Declaramos las Funciones
function ingresarPrecio() {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));

    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++; // contador += 1       contador = contador + 1
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
    /*
        En ambos console.log() se muestra el mismo resultado pero si observan en la consola del navegador en el primero aparece el gastoTotal en un color blanco porque se concateno y se esta mostrando el valor como una cadena de texto mientras que en el segundo se le pasa el valor de la variable como un parámetro que se suma a la cadena "El precio total es" por eso aparece de un color diferente. Solo utilizen uno para mostrar la información, yo escribi ambos para que vieran la diferencia
    */

    console.log("Cantidad de productos: " + contador);
    console.log("El precio total es $" + gastoTotal);
    console.log("El precio total es $", gastoTotal);
}
// Calcular costo total de productos y/o servicios seleccionados por el usuario.
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido númerico");

// función calcular en version función anonima y función flecha. Usar una de las tres opciones. Estas funciones son usadas más que nada cuando cuando las mismmas hacen un return. En la función flecha no es necesario especificar la palabre return ya que el simbolo de la arrow function => hace el retorno. Algo importante a destacar es que estas funciones se estan guardando en una contante con el nombre de calcularTotal por lo cual deberan esta declarada y asignadas con sus valores antes de llamar a la función que la llama en este caso ingresarPrecio() de otra forma nos lanzara un error diciendo que la variable const calcularTotal no ha sido inicializada. ejemplo (Uncaught ReferenceError: Cannot access 'calcularTotal' before initialization)

// const calcularTotal = function(precioProducto) { return gastoTotal + precioProducto };
const calcularTotal = (precioProducto) => gastoTotal + precioProducto;

ingresarPrecio(); // llamamos o invocamos la función
mostrarTotal(); // llamamos o invocamos la función

// Declaramos las Funciones
function ingresarPrecio() {
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));

    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++; // contador += 1       contador = contador + 1
        precioProducto = Number(prompt("Ingrese el precio del producto" + contador + ":"));
    }

    if (precioProducto <= 0) {
        console.log("Ha terminado de introducir los precios de los productos");
    }
}

// Esta comentada para probar la arrowfunction o funion anonima en las lineas de más arriba.
// function calcularTotal(precioProducto) {
//     return gastoTotal + precioProducto;
// }


function mostrarTotal() {
    /*
        En ambos console.log() se muestra el mismo resultado pero si observan en la consola del navegador en el primero aparece el gastoTotal en un color blanco porque se concateno y se esta mostrando el valor como una cadena de texto mientras que en el segundo se le pasa el valor de la variable como un parámetro que se suma a la cadena "El precio total es" por eso aparece de un color diferente. Solo utilizen uno para mostrar la información, yo escribi ambos para que vieran la diferencia
    */

    console.log("Cantidad de productos: " + contador);
    console.log("El precio total es $" + gastoTotal);
    console.log("El precio total es $", gastoTotal);
}
// Variables Globales
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = "";

let arregloProductos2 = [{
    id: 1,
    nombre: "arroz",
    precio: 45,
    stock: 5
}, {
    id: 2,
    nombre: "pastas",
    precio: 10,
    stock: 2
}, {
    id: 3,
    nombre: "cereales",
    precio: 90,
    stock: 500
}, {
    id: 4,
    nombre: "carne",
    precio: 450,
    stock: 50
}, {
    id: 5,
    nombre: "pan",
    precio: 100,
    stock: 30
}];

// recorremos el arregloProductos2 con el método forEach
arregloProductos2.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos2));
// alert(arregloProductos2); // esto devuelve [object Object] porque el array es un objeto y hay que parsearlo para poder mostrarlo como string
console.log(arregloProductos2);

// mostramos en el DOM el arreglo convertido de objeto a string
document.getElementById("mostrar").innerHTML = mostarProductos;
eliminarProducto();

mostarProductos = "";
arregloProductos2.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos2));
console.log(arregloProductos2);
document.getElementById("mostrar").innerHTML = mostarProductos;

// funciones
function recorrerArreglo(item, index) {
    // mostarProductos += index + ": " + item + "<br>"; // object
    mostarProductos += index + ": " + JSON.stringify(item) + "<br>";
}

// filtramos arregloProductos obteniendo un nuevo array con los elementos que pasaron el test (mostramos todos menos el elemento eliminado)
function eliminarProducto() {
    let preguntar = true;
    let respuesta = "";
    let borrarProducto = "";
    let productoEncontrado = "";

    respuesta = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));

    while (preguntar) {
        if (respuesta == 1) {
            borrarProducto = prompt("Introduzca la información del producto a eliminar(nombre)");
            productoEncontrado = arregloProductos2.find(producto => producto.nombre === borrarProducto); // devuelve true si encuentra el producto o false en caso contrario
            if (productoEncontrado) { // Si se encontro el producto se elimina
                alert("Producto a eliminar encontrado.");
                arregloProductos2 = arregloProductos2.filter(producto => producto.nombre !== borrarProducto);
                // console.log(arregloProductos2);
                preguntar = false;
            } else {
                alert("No se encontro el producto que desea eliminar.");
                respuesta = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));
            }
        } else if (respuesta == 2) {
            alert("Ha seleccionado no eliminar productos.");
            preguntar = false;
        } else {
            alert("Ha seleccionado una opción no válida introduzca (1) si desea eliminar un producto o (2) en caso contrario .");
            respuesta = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));
        }
    }
}
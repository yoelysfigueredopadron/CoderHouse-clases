// Variables Globales
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = "";
let arregloProductos = [];
let nuevoProducto = null;

class Producto {
    // Constructor de la clase
    constructor(id, nombre, precio, stock) {
        this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.stock = stock,
            this.total = 0
    }

    info() {
        console.log(`\nProducto#${this.id} \n\nID: ${this.id} \nNombre: ${this.nombre} \nPrecio: $${this.precio} \nStock: ${this.stock}`);
    }

    // En este método obtenemos el total del producto por lo cual el primero info() no hace falta a menos que quieran mostrar el producto sin total. Esto tiene muchas combianaciones dependiendo de los atributos que agreguen en la clase y los valores que queiran mostrar en el método ${this.*}
    infoTotal() {

        this.total = this.precio * this.stock;

        console.log(`\nProducto#${this.id} \n\nID: ${this.id} \nNombre: ${this.nombre} \nPrecio: $${this.precio} \nStock: ${this.stock} \nTotal: $${this.total}`);
    }
}

respuesta = parseInt(prompt("Bienvenido al inventario del almacen. Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));

do {
    if (respuesta == 1) {
        ingresarProducto();
        alert("Producto ingresado con exito. :)");
        console.log("\nProducto ingresado con exito. :)");
        nuevoProducto.info();
        // nuevoProducto.infoTotal(); // con este método del objeto mostramos la info del producto además de su total
        respuesta = parseInt(prompt("Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));
    } else if (respuesta == 2) {
        repetir = false;
        alert("Ha seleccionado salir.");
        console.log("\nHa seleccionado salir.");
    } else {
        alert("Ingresaste una opción incorrecta. Por favor vuelva a intentarlo. :(");
        respuesta = parseInt(prompt("Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));
    }
} while (repetir);

// funciones
function ingresarProducto() {

    id = ++id;
    nombre = prompt(`Introduzca el nombre del producto${id}.`);
    precio = prompt(`Introduzca el precio del producto${id}.`);
    stock = prompt(`Introduzca la stock del producto${id}.`);
    return nuevoProducto = new Producto(id, nombre, precio, stock);

}
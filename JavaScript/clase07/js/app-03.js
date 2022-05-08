// 1-Crear un array vacio llamado productos
// 2-crear una funcion crearProductos() que construya un objeto producto y pida las propiedades del producto.
// 3-Crear una funcion que agregue los productos al array productos

let productos = [];
let repetir = true;

// clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Función constructora Producto
// function Producto(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }

function crearProducto() {
    let nuevoProducto = [];
    let nombre = "";
    let precio = 0;
    let cantidad = 0;

    nombre = prompt("Introduzca el nombre del producto");
    precio = Number(prompt("Introduzca el precio del producto"));
    cantidad = Number(prompt("Introduzca la cantidad del producto"));

    nuevoProducto = new Producto(nombre, precio, cantidad);

    return nuevoProducto;
}

function agregarProductos() {
    return productos.push(crearProducto());
}

while (repetir) {
    let consulta;
    alert("Introduzca los datos del producto.");
    agregarProductos();

    do {
        consulta = Number(prompt("¿Desea introducir los datos de otro producto? Seleccione una opción(1 o 2) \n\n1- Si \n2- No"));
        if (consulta == 1) {
            alert("Ha seleccionado ingresar un nuevo producto");
        } else if (consulta == 2) {
            alert("Ha seleccionado no ingresar más productos");
            repetir = false;
        } else {
            alert(":( Ha introducido una opción incorrecta, por favor selecciona la opción(1 o 2)");
        }
    }
    while (consulta < 1 || consulta > 2);
}

console.log(productos);
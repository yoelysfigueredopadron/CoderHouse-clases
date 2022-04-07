const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto4 = {
    nombre: "Celular 2",
    precio: 600
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3);
console.table(carrito);

// Eliminar último elemento de un arreglo ...
// carrito.pop();
// console.table(carrito);

// carrito.pop();
// console.table(carrito);

// Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// El primer parámetro es la posición del indice en el arreglo apartir cual va a eliminar elementos, el segundo parámetro será cuantos elementos se van a eliminar.
// carrito.splice(0, 1);
// console.table(carrito);
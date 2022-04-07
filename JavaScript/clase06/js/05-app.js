const meses = ['Enero', 'Febrero', 'Marzo'];
// Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');
console.table(meses);

// Carrito de compras vacio
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

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// coloca en elemento al inicio del arreglo y corre los otros elementos hacia abajo sin importar en que orden se encuentren el codigo
carrito.unshift(producto3);

console.table(carrito);
console.log(carrito);
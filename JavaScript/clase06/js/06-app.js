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

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

let resultado;

// forma declarativa
// Los elementos del arreglo se van a mostrar en el orden en que se agregen
resultado = [...carrito, producto]; // Se hace una copia de carrito para agregar productos
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);
console.table(carrito); // El carrito continua vacio
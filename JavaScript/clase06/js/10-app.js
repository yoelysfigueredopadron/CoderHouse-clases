const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Table', precio: 800 },
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Mouse', precio: 30 },
    { nombre: 'Celular', precio: 1000 }
]

// carrito.forEach(function (producto) {
//     console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
// })

carrito.map(function (producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
})


// Una diferencia entre 'map' y 'forEach' es que 'map' crea un arreglo nuevo 'forEach' no.
// const nuevoArreglo2 = carrito.forEach(function (producto) {
//     return `${producto.nombre} - Precio: ${producto.precio}`;
// })

// const nuevoArreglo = carrito.map(function (producto) {
//     return `${producto.nombre} - Precio: ${producto.precio}`;
// })

// muestra el nuevo arreglo creado con 'map'
// console.log(nuevoArreglo);

// muesta undefined ya que 'forEach' no muestra un nuevo arreglo
// console.log(nuevoArreglo2);
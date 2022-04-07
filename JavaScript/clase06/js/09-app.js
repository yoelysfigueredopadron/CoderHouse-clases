const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Table', precio: 800 },
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Mouse', precio: 30 },
    { nombre: 'Celular', precio: 1000 }
]

for (let i = 0; i < carrito.length; i++) {
    // puede comentar algunos console.log() para ver el resultado obtenido en la consola
    console.log(carrito[i]);
    // console.log(carrito[i].nombre);
    // console.log(carrito[i].precio);
    // console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// carrito.forEach(function (producto) {
//     console.log(`${producto.nombre} - Precio: ${producto.precio}`);
// })
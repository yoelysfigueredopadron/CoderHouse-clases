const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// tienen que comentar la constante nombre de la linea 7 sino cuando hagan destructuring les marcará un error porque no pueden existir dos identificadores con el mismo nombre en el mismo ámbito
// Destructuring
// const { nombre, disponible } = producto;
// console.log(nombre);
// console.log(disponible);

// Destruturing con Arreglos
const numeros = [10, 20, 30, 40, 50];

// tomaremos los valores del arreglos numeros respectivamente
// const [primero, segundo, tercero] = numeros;
// console.log(primero);
// console.log(tercero);

// accediendo solo a un valor especifico con Destruturing
// const [primero, , tercero] = numeros;
// console.log(tercero);
// console.log(primero);

// const [, , , , quinto] = numeros;
// console.log(quinto);

const [primero, segundo, ...tercero] = numeros;
console.log(tercero);
// --------------- Operador de incremento
// let numero = 20;
// console.log({ numero });

// numero = numero + 1;
// console.log({ numero });

// numero += 1;
// console.log({ numero });

// numero++;
// console.log({ numero });

// --------------- operador ternario
// let edad = 18;
// let mensaje;

// if (edad >= 18) {
//     mensaje = 'Eres mayor de edad';
// } else {
//     mensaje = 'Eres menor de edad';
// }

// mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
// console.log(mensaje);

// --------------- operador lógico And &&
const carrito = [];
const carrito2 = [
    {
        id: 1,
        nombre: 'Agua Pellegrino',
        precio: 800,
        img: 'agua-pellegrino.jpg',
    },
    {
        id: 2,
        nombre: 'Agua Bonaqua',
        precio: 500,
        img: 'agua-bonagua.jpg',
    },
    {
        id: 3,
        nombre: 'Andes Origen',
        precio: 400,
        img: 'andes-origen.jpg',
    },
];

// carrito.length === 0 ? console.log('El carrito está vacío!') : console.log('El carrito no está vacío.');

// Equivalente utilizando el operador lógico AND
// carrito.length === 0 && console.log('El carrito está vacío!');

// carrito2.length === 0 ? console.log('El carrito está vacío!') : console.log('El carrito no está vacío.');

// Equivalente utilizando el operador lógico AND
// carrito2.length !== 0 && console.log('El carrito no está vacío.');

// --------------- otro ejemplo con And &&
// const usuario = {
//     nombre: 'Yoelys',
//     edad: 17,
// };

// const registroIngreso = usuario.edad >= 18 && new Date();
// console.log(registroIngreso);

// --------------- Operador lógico or
// Si no es falsy (si es distinto de 0, null, undefined, NaN, false o string vacío) el operador OR ( || ) retorna operador1. De lo contrario, retorna operador2.
// console.log(0 || 'Falsy'); // Falsy
// console.log(40 || 'Falsy'); // 40
// console.log(null || 'Falsy'); // Falsy
// console.log(undefined || 'Falsy'); // Falsy
// console.log("'Hola Mundo'" || 'Falsy'); // 'Hola Mundo'
// console.log('' || 'Falsy'); // Falsy
// console.log(NaN || 'Falsy'); // Falsy
// console.log(true || 'Falsy'); // true
// console.log(false || 'Falsy'); // Falsy

// const usuario1 = {
//     nombre: 'Yoelys Figueredo',
//     edad: 17,
// };

// const usuario2 = null;

// console.log(usuario1 || 'El usuario no existe');
// console.log(usuario2 || 'El usuario no existe');

// localStorage.setItem('carrito', JSON.stringify(carrito));
// localStorage.setItem('carrito2', JSON.stringify(carrito2));

// let carritoLS = JSON.parse(localStorage.getItem('carrito')); // || []
// let carrito2LS = JSON.parse(localStorage.getItem('carrito2')); // || []

// console.log(carritoLS);
// console.log(carrito2LS);

// Operador Nullish Coalescing
// Solamente obtenderemos nullish con el valor (null o undefined)
// console.log(0 ?? 'Nullish'); // 0
// console.log(40 ?? 'Nullish'); // 40
// console.log(null ?? 'Nullish'); // Nullish
// console.log(undefined ?? 'Nullish'); // Nullish
// console.log("'Hola Mundo'" ?? 'Nullish'); // 'Hola Mundo'
// console.log('' ?? 'Nullish'); // ""
// console.log(NaN ?? 'Nullish'); // NaN
// console.log(true ?? 'Nullish'); // true
// console.log(false ?? 'Nullish'); // false

// El operador ? realizar comprobaciones de nulabilidad para determinar si un objeto existe o una de sus propiedades
// const usuario = null;

// console.log(usuario?.nombre || 'El usuario no existe');
// console.log(usuario);

const usuario = {
    nombre: 'John Doe',
    edad: 22,
    cursos: {
        javascript: 'aprobado',
    },
};

console.log(usuario?.cursos?.javascript || 'La propiedad no existe'); // "aprobado"

console.log(usuario?.trabajos?.coderhouse || 'La propiedad no existe'); // "La propiedad no existe"

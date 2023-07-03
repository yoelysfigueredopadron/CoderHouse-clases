const frutas = ['banana', 'sandía', 'cereza', 'higo', 'melón', 'manzana'];

// console.log(frutas);

// spread del array
// console.log(...frutas);

const numeros = [30, 55, 67, -20, 110, 5, 32, 78, 99];

// console.log(Math.max(numeros)); // Salida: NaN
// console.log(Math.max(...numeros)); // Salida: 110
// console.log(Math.min(...numeros)); // Salida: -20

const nombres1 = ['Sofía', 'Valentina', 'Isabella', 'Camila', 'Emma'];
const nombres2 = ['Alejandro', 'Sebastián', 'Mateo', 'Daniel', 'Nicolás'];

// desparramamos los dos arrays dentro del nuevo array nombres con el operador spread
const nombres = [...nombres1, ...nombres2];

// console.log(nombres);

const nombresComoObjeto = { ...nombres };
// console.log(nombresComoObjeto);

const producto1 = {
    id: 1,
    nombre: 'Agua Pellegrino',
    precio: 800,
    img: 'agua-pellegrino.jpg',
};

// console.log(producto1);

const producto2 = { ...producto1 };
producto2.id = 2;
producto2.nombre = 'Agua Bonaqua';
producto2.precio = 500;
producto2.img = 'agua-bonagua.jpg';

// console.log(producto2);

const producto3 = { ...producto1, cantidad: 1, subtotal: 0 };

// console.log(producto3);

function sumar(...numeros) {
    let total = 0;

    for (let numero of numeros) {
        total += numero;
    }

    return total;
}

function sumar2(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// console.log(sumar(1, 2, 3)); // Salida: 6
// console.log(sumar(4, 5, 6, 7)); // Salida: 22
// console.log(sumar(10)); // Salida: 10

// console.log(sumar2(1, 2, 3)); // Salida: 6
// console.log(sumar2(4, 5, 6, 7)); // Salida: 22
// console.log(sumar2(10)); // Salida: 10

// Operador ternario
function getDiscountedPrice(price, isMember) {
    const discount = isMember ? 0.2 : 0;

    return price - price * discount;
}

// console.log(getDiscountedPrice(100, true)); // Salida: 80 (20% de descuento)
// console.log(getDiscountedPrice(100, false)); // Salida: 100 (sin descuento)

// Operador lógico AND
// utilizamos el operador lógico AND para validar que tanto el username como el password sean proporcionados
function validateUser(username, password) {
    return username && password;
}

// console.log(validateUser('john', 'password')); // Salida: true (ambos campos están presentes)
// console.log(validateUser('', 'password')); // Salida: false (nombre de usuario vacío)
// console.log(validateUser('john', null)); // Salida: false (contraseña nula)
// console.log(validateUser(undefined, 'password')); // Salida: false (nombre de usuario indefinido)

// Operador lógico OR
function greetUser(name) {
    const username = name || 'Invitado';

    return `Bienvenido, ${username}!`;
}

console.log(greetUser('Yoelys')); // Salida: "Bienvenido, Yoelys!"
console.log(greetUser()); // Salida: "Bienvenido, Invitado!" (sin nombre de usuario)

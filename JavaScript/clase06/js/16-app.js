const alumnos = [
    { nombre: 'Liset', edad: 25, grupo: 1 },
    { nombre: 'Miguel', edad: 27, grupo: 2 },
    { nombre: 'Juan', edad: 29, grupo: 3 },
    { nombre: 'Julieta', edad: 20, grupo: 1 },
    { nombre: 'Pedro', edad: 21, grupo: 1 },
    { nombre: 'Hector', edad: 23, grupo: 2 },
    { nombre: 'Yunior', edad: 24, grupo: 4 },
    { nombre: 'Claudia', edad: 30, grupo: 1 },
    { nombre: 'Adrian', edad: 33, grupo: 4 },
    { nombre: 'Carlos', edad: 19, grupo: 2 },
    { nombre: 'Yaima', edad: 18, grupo: 3 }
];

console.log(alumnos);

// va a comparar el elemento A con el B hasta el final del arreglo
const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => {

    // retornamos el arreglo ordenado
    // return alumnoA.edad - alumnoB.edad; // de menor a mayor elementoA - elementoB
    return alumnoB.edad - alumnoA.edad; // de mayor a menor elementoB - elementoA

});

// console.log(alumnos_ordenados);

// sintaxis simplificada
// const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => alumnoA.edad - alumnoB.edad);
// const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => alumnoB.edad - alumnoA.edad);
// const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => alumnoA.grupo - alumnoB.grupo);
// const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => alumnoB.grupo - alumnoA.grupo);

// console.log(alumnos_ordenados);


// ordenar alfabeticamente
// const alumnos_ordenados = alumnos.sort((alumnoA, alumnoB) => {

//     // < (ascendete)            o           > descendente
//     // Ordenamos el arreglo con un if
//     // if (alumnoA.nombre < alumnoB.nombre) {
//     //     return -1;
//     // } else {
//     //     return 1;
//     // }

//     // Ordenamos el arreglo con el operador ternario
//     // return (alumnoA.nombre < alumnoB.nombre) ? -1 : 1; // orden ascendente
//     return (alumnoA.nombre > alumnoB.nombre) ? -1 : 1; // orden descendente

// });

// console.log(alumnos_ordenados);
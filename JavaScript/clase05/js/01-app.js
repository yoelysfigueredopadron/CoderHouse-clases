// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";

// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["calle"]);

// const persona2 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// };

// persona2["nombre"] = "Marge";
// persona2.edad = 36;


// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }
// const persona3 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona4 = new Persona("Marge", 36, "Av. Siempreviva 742");

// function Persona(literal) {
//     this.nombre = literal.nombre;
//     this.edad = literal.edad;
//     this.calle = literal.calle;
// }
// const persona5 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });

// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//     this.hablar = function () { console.log("HOLA SOY " + this.nombre) }
// }
// const persona6 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona7 = new Persona("Marge", 36, "Av. Siempreviva 742");
// persona6.hablar();
// persona7.hablar();

// const persona8 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log("nombre" in persona8);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log("origen" in persona8);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona8) {
//     console.log(persona8[propiedad]);
// }

// class Persona {
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;
//     }
// }
// const persona9 = new Persona("Homero", 39, "Av. Siempreviva 742");

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }

// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");

// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

// console.log(producto1);
// console.log(producto1.nombre);
// console.log(producto1.precio);
// console.log(producto1.vendido);

// console.log(producto2);
// Clase padre, super clase o clase principal (clase de la cual heredan otras)
class Persona {

    constructor(nombre, edad) {
        // Propiedades de la clase
        this.nombre = nombre;
        this.edad = edad;
    }

    // método
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    //un método estatico es llamado sin necesidad de instanciar la clase o lo que es lo mismo crear un objeto de la misma(de la clase)
    static definicion() {
        console.log('Una persona es un ser humano');
    }
}

// Esta clase hereda de Persona (se conoce como clase hija, subclase o clase extendida)
class Desarrollador extends Persona {

    saludoDesarrollador() {
        this.saludar();
        console.log("Soy un(a) desarrollador(a) de software");
    }

}

class Designer extends Persona {

    constructor(nombre, edad, tipo) { // heredamos el constructor de la clase padre y le agregamos un nuevo parámetro
        // Propiedades de la clase
        super(nombre, edad); // super no permite usar el constructor de una clase padre en su clase hija
        this.tipo = tipo;
    }

    saludoDesigner() {
        super.saludar(); // método de la clase padre
        // this.saludar(); // método de la clase hija
        console.log(`Soy un/a ${this.tipo}.`);
    }

    // si el método existe en la clase padre con el mismo nombre primero se le da prioridad al método en la clase desde donde esta siendo llamado en este caso la clase hija.
    // saludar() { comentamos para probor al final de todo que las clases heredan de prototipos.
    //     console.log('Hola desde la sub-clase');
    // }

}

let persona = new Persona('Yoelys', 39);
let desarrollador = new Desarrollador('Jose', 21); // Utilizamos el constructor de la clase padre
let designer = new Designer('Maria', 28, 'diseñadora'); // Utilizamos el constructor de la clase padre


persona.saludar();
// persona.definicion(); // Uncaught TypeError: persona.definicion is not a function

Persona.definicion(); // accedemos directamente al método estático a través de la clase Persona
Desarrollador.definicion();

desarrollador.saludoDesarrollador();

designer.saludoDesigner();

// Esta conclución es muy fuerte.Las clases son funciones que heredan de prototipos(prototype)
console.log(typeof Persona);
console.log(typeof Desarrollador);
console.log(typeof Designer);

Desarrollador.prototype.saludar();

Desarrollador.prototype.saludar.bind({
    nombre: 'Yoelys',
    edad: 39
})();
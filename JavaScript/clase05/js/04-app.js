class Lampara {

    constructor(color, marca, voltaje, encendida) {

        this.color = color;
        this.marca = marca;
        this.voltaje = voltaje;
        this.encendida = encendida;

    }

    // método sin return
    // encenderApagar = () => {
    //     if (this.encendida === false) {
    //         this.encendida = true;
    //     } else {
    //         this.encendida = false;
    //     }
    // }

    // El método con return
    encenderApagar = () => {
        if (this.encendida === false) {
            return this.encendida = true;
        } else {
            return this.encendida = false;
        }
    }

}

let lampara1 = new Lampara("Azul", "AAAAA", "220W", false);

lampara1.encenderApagar();
console.log(lampara1.encenderApagar()); // Nos devuelve indefined si el método o función no nos devuelve nada (return)
console.log(lampara1.encendida);
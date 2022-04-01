class DatosUserFormulario {

    constructor(nombre, apellido, cursoDeInteres, email, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cursoDeInteres = cursoDeInteres;
        this.email = email;
        this.pais = pais;
    }

    seleccionaPais() {
        if (pais.toUpperCase() == "ARGENTINA" || "USA" || "COLOMBIA") {
            alert("Gracias por tu interes en el curso " + cursoDeInteres + " tenemos excelentes opciones para ti, te enviaremos la informacion al " + email)
        } else {
            alert("Increible te enviaremos informacion a tu mail " + email)
        }
    }

    mostrarInformacion() {
        console.log("Nombre: " + this.nombre + "\nApellido: " + this.apellido + "\nCurso de interes: " + this.cursoDeInteres + "\nEmail: " + this.email + "\nPais: " + this.pais);

        alert("Nombre: " + this.nombre + " Apellido: " + this.apellido + " Curso de interes: " + this.cursoDeInteres + " Email: " + this.email + " Pais: " + this.pais);
    }

}


const usuarioNuevo = new DatosUserFormulario({ nombre: "", apellido: "", cursoDeInteres: "", email: "", pais: "" });
agregarInfoUsuario();
usuarioNuevo.mostrarInformacion();

function agregarInfoUsuario() {

    usuarioNuevo.nombre = prompt("Ingresa tu nombre");
    usuarioNuevo.apellido = prompt("Ingresa tu apellido");
    usuarioNuevo.cursoDeInteres = prompt("Ingresa tu curso de interes para recibir informacion");
    usuarioNuevo.email = prompt("Ingresa tu mail para recibir informacion");
    usuarioNuevo.pais = prompt("Ingresa tu pais");

    return usuarioNuevo;
}
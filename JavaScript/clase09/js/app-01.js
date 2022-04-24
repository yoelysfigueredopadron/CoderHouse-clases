// Variables
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton4 = document.getElementById("boton4");
let btnMain = document.getElementById("btnMain");
let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
let miFormulario = document.getElementById("formulario");
let boton = document.getElementById('boton');
let mostrarHijosFormulario = document.getElementById('mostrar-hijos-formulario');
let cantidadElementosFormulario = document.getElementById('cantidad-elementos-formulario');

let saludo = function () {
    alert("Saludo!");
}

// funciones
function respuestaClick() {
    console.log("Respuesta evento click del botón1");
}

function validarFormulario(e) {
    e.preventDefault();
    console.log("Enviando mensaje desde la función validarFormulario()");
}

function validarFormulario2(e) {
    //Cancelamos el comportamiento del evento submit
    e.preventDefault();
    console.log("\nEnviando mensaje desde la función validarFormulario2() esta es otra función");

    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target;
    // console.log(formulario);

    const coleccionHijos = miFormulario.children;
    let elementosFormulario = "";
    for (let i = 0; i < miFormulario.children.length; i++) {
        elementosFormulario += coleccionHijos[i].tagName + "<br>";
    }

    mostrarHijosFormulario.innerHTML = elementosFormulario;
    cantidadElementosFormulario.innerHTML = `Cantidad de elementos del formulario : ${coleccionHijos.length}`

    // la propiedad children nos devuelve 
    //Obtengo el valor del segundo hijo <input type="text">
    console.log(formulario.children[1].value);

    //Obtengo el valor del sexto hijo <input type="number"> 
    console.log(formulario.children[5].value);

    //Obtengo el valor del noveno hijo <input type="submit">
    console.log(formulario.children[8].value);
}


boton1.addEventListener("click", respuestaClick);
boton2.onclick = () => { console.log("Respuesta del botón2") };
boton4.onclick = () => { alert("Respuesta del botón4") };

btnMain.onclick = () => { console.log("Click") };
// btnMain.onmousemove = () => { console.log("Move") }

// input1.onkeyup = () => { console.log("keyUp") };
// input2.onkeydown = () => { console.log("keyDown") };
// input1.onkeyup = () => { console.log(input1.value) };
// input2.onkeydown = () => { console.log(input2.value) };
// input1.onchange = () => { console.log("valor1") };
// input2.onchange = () => { console.log("valor2") };
// input1.onchange = () => { console.log(input1.value) };
// input2.onchange = () => { console.log(input2.value) };

// miFormulario.addEventListener("submit", validarFormulario);
miFormulario.addEventListener("submit", validarFormulario2);

// boton.addEventListener("click", function () {
//     console.log('funciono! :D')
// });

// boton.addEventListener("click", saludo);
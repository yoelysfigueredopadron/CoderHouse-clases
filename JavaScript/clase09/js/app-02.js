let enviar = document.getElementById("enviar");
const otraFormaEnviar = document.querySelector('#enviar'); // cree otro nombre de varaible porque no pueden haber dos iguales
const submit = document.querySelector('.submit');

cargarEventListeners();
function cargarEventListeners() {
    // usamos el ID con getElementById
    // enviar.addEventListener('click', saludo);

    // usamos el ID con querySelector
    otraFormaEnviar.addEventListener('click', saludo);

    // usamos un selector de clase css con querySelector
    // submit.addEventListener('click', saludo);
}

function saludo() {
    alert("Hola Mundo!");
    console.log("Hola Mundo!");
}
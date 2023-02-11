// Ejemplo 1
let boton1 = document.getElementById('boton1');
let boton2 = document.getElementById('boton2');
let boton4 = document.getElementById('boton4');

boton1.addEventListener('click', respuestaClick);

function respuestaClick() {
	console.log('Respuesta evento click del botón1');
}

boton2.onclick = () => {
	console.log('Respuesta del botón2');
};

boton4.onclick = () => {
	alert('Respuesta del botón4');
};

// Ejemplo 2
let input1 = document.getElementById('nombre');
let input2 = document.getElementById('edad');

// input1.onkeyup = () => {
// 	console.log('keyUp');
// };

// input2.onkeydown = () => {
// 	console.log('keyDown');
// };

// input1.onkeyup = () => {
// 	console.log(input1.value);
// };

// input2.onkeydown = () => {
// 	console.log('Has presionado una tecla en el input');
// };

// input1.onchange = () => {
// 	console.log(`Nombre: ${input1.value}`);
// };

// input2.onchange = () => {
// 	console.log(`Edad: ${input2.value}`);
// };

// Ejemplo 3
let miFormulario = document.getElementById('formulario');

// miFormulario.addEventListener('submit', validarFormulario);
miFormulario.addEventListener('submit', validarFormulario2);

function validarFormulario(e) {
	e.preventDefault();
	console.log('Enviando mensaje desde la función validarFormulario()');
}

function validarFormulario2(e) {
	//Cancelamos el comportamiento del evento submit
	e.preventDefault();
	console.log('\nEnviando mensaje desde la función validarFormulario2() esta es otra función');

	//Obtenemos el elemento desde el cual se disparó el evento
	let formulario = e.target;
	console.log(formulario);

	// la propiedad children nos devuelve
	//Obtengo el valor del segundo hijo <input type="text">
	console.log(formulario.children[1].value);

	//Obtengo el valor del sexto hijo <input type="number">
	console.log(formulario.children[5].value);

	//Obtengo el valor del noveno hijo <input type="submit">
	console.log(formulario.children[8].value);

	console.log(`Cantidad de elementos hijos del formulario: ${miFormulario.children.length}`);
}

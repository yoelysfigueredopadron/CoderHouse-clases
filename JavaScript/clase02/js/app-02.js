let lloviendo;
let consulta = prompt("¿Está lloviendo? \n responda si o no");

//ejemplo1
if (consulta == 'si') {
    lloviendo = true;
} else if (consulta == 'no') {
    lloviendo = false;
} else {
    alert(":( Ha introducido una respuesta incorrecta. Estimamos que no esta lloviendo acorde a su respuesta.");
}

// console.log("Lloviendo = " + lloviendo);


//ejemplo2
if (lloviendo) {
    alert("Esta lloviendo");
    console.log("Esta lloviendo");
} else {
    alert("No esta lloviendo");
    console.log("No esta lloviendo");
}

// console.log(lloviendo);
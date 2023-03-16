// dir() es la manera de ver todas las propiedades de un objeto JavaScript específicado por consola
// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);

// métodos para acceder al DOM
// getElementById()
// getElementsByClassName()
// getElementsByTagName()

// Ejemplo 1
// getElementById
// let div = document.getElementById('app');
// let parrafo1 = document.getElementById('parrafo1');

// console.log(div);
// console.log(parrafo1);

// console.log(div.innerHTML);
// console.log(parrafo1.innerHTML);

// document.getElementById('mostrar').innerHTML = 'Aprendiendo DOM';

// Ejemplo 2
// let paises = document.getElementsByClassName('paises');
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// modificamos el contenido del primer div
// const coleccion = document.getElementsByClassName('ejemplo');
// coleccion[1].innerHTML = 'Se modifico el contenido del div';

// Ejemplo 3
// getElementsByTagName
// const coleccionLi = document.getElementsByTagName('li');
// document.getElementById('mostrar2').innerHTML = coleccionLi[1].innerHTML;

// paises ya estaba creada más arriba en el código pero lo traemos a esta parte para que tenga más claridad de donde se obtiene el arreglo
// let paises = document.getElementsByClassName('paises');

// buscar html paises
// Recorre HTMLcollection con For...Of
// for (const pais of paises) {
// 	console.log(pais.innerHTML);
// }

// Ejemplo 4
// Modificar Nodos
// innerText
// let titulo = document.getElementById('titulo');
// console.log(titulo.innerText); // “Hola Mundo!”

// cambio el contenido del elemento
// titulo.innerText = 'Hola Coder!';
// console.log(titulo.innerText); // “Hola Coder!”

// let parrafo2 = document.getElementById('parrafo2');
// parrafo2.innerText = 'El parráfo ha sido modificado.';
// console.log(parrafo2.innerText);

// Ejemplo 5
// innerHTML
// let container = document.getElementById('contenedor');

// cambio el código HTML interno
// container.innerHTML = '<h2>Se inserto un nuevo h2</h2><p>Se inserto un nuevo parrafo</p>';

// let html = document.getElementById('listaFrutas').innerHTML;
// document.getElementById('mostrarLista').innerHTML = html;

// Ejemplo 6
// className
// let container2 = document.getElementById('contenedor2');

// // cambio el código HTML interno
// container2.innerHTML = '<h2>Hola container2!</h2>';

// // cambio el atributo class
// container2.className = 'container row carrito';

// Ejemplo 7
// Agregar o quitar Nodos (createElement)
// Crear nodo de tipo Elemento, etiqueta p
// let parrafo3 = document.createElement('p');

// Insertar HTML interno
// parrafo3.innerHTML = '<h2>Esto fue insertado dentro de un parráfo creado con el método createElement</h2>';

// Añadir el nodo Element como hijo de body
// document.body.append(parrafo3);

// Ejemplo 8
// let parrafo4 = document.getElementById('parrafo4');
// Eleminando el propio elemento
// parrafo4.remove();

// buscar paises en el html
// let paises2 = document.getElementsByClassName('paises');
// Eliminando el primer elemento de clase paises
// paises2[2].remove();

// propiedad value
// document.getElementById('nombre').value = 'Yoelys';
// document.getElementById('edad').value = 35;

// Ejemplo 9
// Creando opciones desde un Array
// Obtenemos el nodo donde vamos a agregar los nuevos elementos
let elementoPadre = document.getElementById('personas');

// Array con la información a agregar
let personas = ['HOMERO', 'MARGE', 'BART', 'LISA', 'MAGGIE'];

// Iteramos el array con for...of
for (const persona of personas) {
	//Creamos un nodo <li> y agregamos al elemento padre en cada ciclo un elemento hijo
	let li = document.createElement('li');
	li.innerHTML = persona;
	elementoPadre.appendChild(li);
}

// Ejemplo 10
// let producto = { id: 1, nombre: 'Arroz', precio: 125 };
// let concatenado = 'ID: ' + producto.id + ' - Producto: ' + producto.nombre + ' - Precio: $' + producto.precio;
// let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} - Precio: $${producto.precio}`;

// El valor es idéntico pero la construcción de la plantilla es màs sencilla con los backticks ``
// console.log(concatenado);
// console.log(plantilla);

// Ejemplo 11
// let producto2 = { id: 1, nombre: 'Arroz', precio: 125 };
// let contenedor = document.createElement('div');
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h3> ID: ${producto2.id}</h3>
//                         <p>  Producto: ${producto2.nombre}</p>
//                         <b> $ ${producto2.precio}</b>`;
// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);

// Ejemplo 12
// Creando elementos desde objetos
// const productos = [
// 	{ id: 1, nombre: 'Arroz', precio: 125, img: 'arroz.jpg' },
// 	{ id: 2, nombre: 'Fideo', precio: 70, img: 'fideos.jpg' },
// 	{ id: 3, nombre: 'Pan', precio: 50, img: 'pan.jpg' },
// 	{ id: 4, nombre: 'Flan', precio: 100, img: 'flan.jpg' }
// ];

// for (const producto of productos) {
// 	let contenedor = document.createElement('div');
// 	contenedor.classList.add('card');

// 	//Definimos el innerHTML del elemento con una plantilla de texto
// 	contenedor.innerHTML = `<img src="./img/${producto.img}" alt="${producto.nombre}" style="width: 100%" />
// 							<div class="container">
// 								<h4><b>${producto.nombre}</b></h4>
// 								<p>$${producto.precio}</p>
// 							</div>`;
// 	document.body.appendChild(contenedor);
// }

// Ejemplo 13
// querySelector https://www.w3schools.com/cssref/css_selectors.php
// El método querySelector() returna el primer elemento que coincide con el selector css.
// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
// let parrafo5 = document.querySelector('#contenedor3 p');

// seleccionar sólo el contenedor por id con #
// let contenedor3 = document.querySelector('#contenedor3');

// o por clase:
// let parrafoPorClase = document.querySelector('.texto');

// console.log(parrafo5);
// console.log(contenedor3);
// console.log(parrafoPorClase);

// document.querySelector('p').style.backgroundColor = 'red';
// document.querySelector('p').style.backgroundColor = '#0000ff';
// document.querySelector('p').style.backgroundColor = 'rgb(0, 255, 0)';

// document.querySelector('.paises').style.backgroundColor = 'rgb(255, 0, 0)';
// document.querySelector('.ejemplo').style.backgroundColor = '#4db8ff';

// modificamos el valor de la propiedad innerHTML
// document.querySelector('.ejemplo').innerHTML = 'Hello World!';

// realiza lo mismo que el ejemplo anterior utilizando una const
// const parrafoEjemplo1 = document.querySelector('.ejemplo');
// parrafoEjemplo1.innerHTML = 'Hello World!';

// document.querySelector('a[target]').style.border = '5px solid red';

// Ejemplo 14
// .radio:checked
// let radioChecked = document.querySelector('.radio:checked');
// console.log(radioChecked);

// querySelectorAll
// const nodeList = document.querySelectorAll('.ejemplo');
// for (let i = 0; i < nodeList.length; i++) {
// 	nodeList[i].style.backgroundColor = 'rgb(0, 255, 0)';
// }

// const nodeList2 = document.querySelectorAll('a[target]');
// for (let i = 0; i < nodeList2.length; i++) {
// 	nodeList2[i].style.border = '5px solid green';
// }

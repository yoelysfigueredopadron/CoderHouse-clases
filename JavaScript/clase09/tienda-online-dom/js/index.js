const iconMenu = document.getElementById('icon-menu');
const containerProducts = document.getElementById('container-products');
const modal = document.getElementById('ventanaModal');
const carrito = document.getElementById('carrito');
const spanClose = document.getElementsByClassName('close')[0];
const contenedorCarrito = document.querySelector('.modal-body');
let productosCarrito = [];

renderizarProductos();
cargarEventos();

function cargarEventos() {
	iconMenu.addEventListener('click', showMenu);

	containerProducts.addEventListener('click', agregarProducto);

	carrito.onclick = function () {
		modal.style.display = 'block';
	};

	spanClose.onclick = function () {
		modal.style.display = 'none';
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
}

function agregarProducto(e) {
	e.preventDefault();
	// console.log(e.target);

	if (e.target.classList.contains('agregar-carrito')) {
		const productoAgregado = e.target.parentElement;
		// console.log(productoAgregado);

		leerDatosProducto(productoAgregado);
	}
}

function leerDatosProducto(producto) {
	// Creamos un objeto literal
	const datosProducto = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('h4').textContent,
		precio: Number(producto.querySelector('p').textContent.replace('$', '')),
		id: parseInt(producto.querySelector('a').getAttribute('id')),
		cantidad: 1,
		subtotal: 0
	};

	datosProducto.subtotal = datosProducto.precio * datosProducto.cantidad;
	// console.log(datosProducto);

	agregarAlCarrito(datosProducto);
}

function agregarAlCarrito(productoAgregar) {
	// console.log(productosCarrito);
	const existeEnCarrito = productosCarrito.some((producto) => producto.id === productoAgregar.id);
	// console.log(existeEnCarrito);

	if (existeEnCarrito) {
		// Creamos un nuevo array con los productos del carrito actualizados
		const productos = productosCarrito.map((producto) => {
			if (producto.id === productoAgregar.id) {
				producto.cantidad++;
				producto.subtotal = producto.precio * producto.cantidad;

				// retornamos el objeto producto(cantidad y subtotal actualizados)
				return producto;
			} else {
				// retornamos el producto que estaba en el carrito sin actualizar ya que no coincide con el nuevo producto agregado
				return producto;
			}
		});

		// productosCarrito = [...productos]; // ... Spread Operator será estudiado en próximas clases
		productosCarrito = productos; // reasignamos con el array productos devuelto por el metodo "map"
	} else {
		productosCarrito.push(productoAgregar); // agregamos el nuevo producto ya que no se encontraba dentro de productosCarrito
	}

	console.log(productosCarrito);
	mostrarProductosCarrito();
}

function mostrarProductosCarrito() {
	limpiarHTML();

	productosCarrito.forEach((producto) => {
		const { imagen, nombre, precio, cantidad, subtotal, id } = producto;
		const div = document.createElement('div');
		div.classList.add('contenedor-producto');

		div.innerHTML = `
			<img src="${imagen}" width="100">
			<P>${nombre}</P>
			<P>$${precio}</P>
			<P>${cantidad}</P>
			<P>$${subtotal}</P>
			<a href="#" class="borrar-producto" data-id="${id}"> X </a>
		`;

		contenedorCarrito.appendChild(div);
	});
}

function limpiarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

function showMenu() {
	let navbar = document.getElementById('myTopnav');

	if (navbar.className === 'topnav') {
		navbar.className += ' responsive';
	} else {
		navbar.className = 'topnav';
	}
}

function renderizarProductos() {
	productos.forEach((producto) => {
		const divCard = document.createElement('div');
		divCard.classList.add('card');
		divCard.innerHTML += `
			<img src=./img/${producto.img} alt=${producto.nombre} />
			<h4>${producto.nombre}</h4>
			<p>$${producto.precio}</p>
			<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
        `;

		containerProducts.appendChild(divCard);
	});
}

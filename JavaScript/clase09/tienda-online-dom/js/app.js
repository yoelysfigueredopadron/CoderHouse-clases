let productosCarrito = [];
const contenedorProductos = document.getElementById('contenedor-productos');

cargarEventListeners();

function cargarEventListeners() {
	renderizarProductos();

	contenedorProductos.addEventListener('click', agregarproductos);
}

function agregarproductos(e) {
	// console.log(e.target);

	if (e.target.classList.contains('agregar-carrito')) {
		// console.log(e.target.parentElement.parentElement.parentElement);

		const productoAgregado = e.target.parentElement.parentElement.parentElement;
		leerDatos(productoAgregado);
	}
}

function leerDatos(producto) {
	// console.log(producto);

	const datosProducto = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('span.card-title').textContent,
		precio: Number(producto.querySelector('p').textContent.replace('$', '')),
		id: Number(producto.querySelector('a').getAttribute('id')),
		cantidad: 1,
		subtotal: 0
	};

	datosProducto.subtotal = datosProducto.precio * datosProducto.cantidad;
	// console.log(datosProducto);

	// console.log(productosCarrito);
	const existeEnCarrito = productosCarrito.some((producto) => producto.id === datosProducto.id);
	// console.log(existeEnCarrito);

	if (existeEnCarrito) {
		const productos = productosCarrito.map((producto) => {
			if (producto.id === datosProducto.id) {
				producto.cantidad++;
				producto.subtotal = producto.precio * producto.cantidad;

				// retornamos el objeto producto actualizado al arreglo productosCarrito (cantidad y subtotal actualizados)
				return producto;
			} else {
				// retornamos el producto que estaba en el carrito sin actualizar cantidad ya que no coincide con el nuevo producto agregado
				return producto;
			}
		});

		// productosCarrito = [...productos]; // ... Spread Operator será estudiado en próxima clases
		productosCarrito = productos; // agregamos el array productos devuelto por el metodo "map"
	} else {
		productosCarrito.push(datosProducto); // agregamos el nuevo producto ya que no se encontraba dentro de productosCarrito
	}

	// productosCarrito.push(datosProducto);
	console.log(productosCarrito);
}

function renderizarProductos() {
	const contenedor = document.getElementById('contenedor-productos');

	productos.forEach((producto) => {
		const div = document.createElement('div');
		div.classList.add('card');
		div.innerHTML += `
                      <div class="card-image">
                        <img src=./img/${producto.img} />
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=${producto.id}><i class="material-icons agregar-carrito">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                        <span class="card-title">${producto.nombre}</span>
                        <p>$${producto.precio}</p>
                      </div>
                     `;
		contenedor.appendChild(div);
	});
}

const renderizarProductos = () => {
	const contenedor = document.getElementById('contenedor-productos');

	productos.forEach((producto) => {
		const div = document.createElement('div');
		div.classList.add('card');
		div.innerHTML += `
                      <div class="card-image">
                        <img src=./img/${producto.img} />
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                        <span class="card-title">${producto.titulo}</span>
                        <p>$${producto.precio}</p>
                      </div>
                     `;
		contenedor.appendChild(div);
	});
};

renderizarProductos();

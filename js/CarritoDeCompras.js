
        window.onload = function () {
            // Variables
            const baseDeDatos = [
                {
                    id: 1,
                    nombre: 'Auricular',
                    precio: '670',
                    imagen: 'data:image/jpeg;base64,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'
                },
                {
                    id: 2,
                    nombre: 'Microfono',
                    precio: '2.000',
                    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYtVN3FeRwZHJu4ucADPqP7BRgT8dgWEIH4pC0TJdjBs3XM2a7HIcTz9aVuA&usqp=CAc'
                },
                {
                    id: 3,
                    nombre: 'Teclado',
                    precio: '4.100',
                    imagen: 'data:image/jpeg;base64,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07f5lYaeKU01/PPouTea+ko+sakT/DSv/wDKz/KWFxMwdJ0sdir2Woqd1OnTX0st5fU5LxVTWq2IYHfUdlX+YhZ37hPYTDIbl8Q3cKppr+WllE5LC+zGDptnXD085FszDO3q1zNd3iyd485YT2WJNlFMngmas3mKKvbzn0uC5t8S5W1OrY7zTFMDxNRg38pnftOmq6KAPAASyWaeHm/tHoIfE6hwnNI+mdqa+LtU/lVU/qnPYTmtwy2zPe23LTTX/wBzpCPIidgRJme3oIPn8N7H4NLfVFu5ncr+S+X4TlsNgKVP9nSpp91VX5CbUSS3qURESAREQCmIiQF0REoEREAREQDqjnN9j2q1TWRSVqEElUZyr2CHMq65WVaetrAq1+1PkMJzd13HZqHuSi49GrdGvxnoaJZRt1ykmvfu3SOB0xgOalzYsh7xUrqnwp06n9U52hzWUxvoL3dE9U/mqVMp/IJ2VEm0e/rJM3BLy+8nxuF9gaaizYitbhTWlQHrTQN8ZyGG9isCm2gtQ8apaqfVyZ9FEB1N7mvhcHTpi1OmiDgqhR8JsREGRERAEREAREQBERAEREAREQBERAKIiJAXxESgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQCiIiQF8REoEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA14iJAbEREoEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA14mIkBsyFXZESg14iJAIiIBmIiAIiIAiIgCIiAIiIAmYiAIiIAiIgCDEQAJkxEAxMxEAqiIkB/9k='
                },
                {
                    id: 4,
                    nombre: 'LCD',
                    precio: '19.000',
                    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOItvyjMCZnhB-AhOH6yiGh7o07Bxne-fNErTuBlsj0yuG-Fu6hApnpiT5RNS4hbR6bM_9oZI&usqp=CAc'
                }

            ];

            let carrito = [];
            let total = 0;
            const DOMitems = document.querySelector('#items');
            const DOMcarrito = document.querySelector('#carrito');
            const DOMtotal = document.querySelector('#total');
            const DOMbotonVaciar = document.querySelector('#boton-vaciar');
           
            const miLocalStorage = window.localStorage;

            // Funciones
                 
            /**
            * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
            */


            function renderizarProductos() {
                baseDeDatos.forEach((info) => {
                    // Estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // Body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    const miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info.nombre;
                    // Imagen
                    const miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info.imagen);
                    // Precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = '$ ' + info.precio ;
                    // Boton 
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info.id);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    DOMitems.appendChild(miNodo);
                });
            }

            /**
            * Evento para añadir un producto al carrito de la compra
            */
            function anyadirProductoAlCarrito(evento) {
                // Anyadimos el Nodo a nuestro carrito
                carrito.push(evento.target.getAttribute('marcador'))
                // Calculo el total
                calcularTotal();
                // Actualizamos el carrito 
                renderizarCarrito();
                // Actualizamos el LocalStorage
                guardarCarritoEnLocalStorage();
            }

            /**
            * Dibuja todos los productos guardados en el carrito
            */
            function renderizarCarrito() {
                // Vaciamos todo el html
                DOMcarrito.textContent = '';
                // Quitamos los duplicados
                const carritoSinDuplicados = [...new Set(carrito)];
                // Generamos los Nodos a partir de carrito
                carritoSinDuplicados.forEach((item) => {
                    // Obtenemos el item que necesitamos de la variable base de datos
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        // ¿Coincide las id? Solo puede existir un caso
                        return itemBaseDatos.id === parseInt(item);
                    });
                    // Cuenta el número de veces que se repite el producto
                    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    // Creamos el nodo del item del carrito
                    const miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $ ${miItem[0].precio}`;
                    // Boton de borrar
                    const miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'Quitar';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.dataset.item = item;
                    miBoton.addEventListener('click', borrarItemCarrito);
                    // Mezclamos nodos
                    miNodo.appendChild(miBoton);
                    DOMcarrito.appendChild(miNodo);
                });
            }

            /**
            * Evento para borrar un elemento del carrito
            */
            function borrarItemCarrito(evento) {
                // Obtenemos el producto ID que hay en el boton pulsado
                const id = evento.target.dataset.item;
                // Borramos todos los productos
                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                // volvemos a renderizar
                renderizarCarrito();
                // Calculamos de nuevo el precio
                calcularTotal();
                // Actualizamos el LocalStorage
                guardarCarritoEnLocalStorage();

            }

            /**
            * Calcula el precio total teniendo en cuenta los productos repetidos
            */
            function calcularTotal() {
                // Limpiamos precio anterior
                total = 0;
                // Recorremos el array del carrito
                carrito.forEach((item) => {
                    // De cada elemento obtenemos su precio
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    total = total + parseFloat(miItem[0].precio );
                });
                // Renderizamos el precio en el HTML
                DOMtotal.textContent = total.toFixed(3);
            }

            /**
            * Varia el carrito y vuelve a dibujarlo
            */
            function vaciarCarrito() {
                // Limpiamos los productos guardados
                carrito = [];
                // Renderizamos los cambios
                renderizarCarrito();
                calcularTotal();
                // Borra LocalStorage
                localStorage.clear();

            }

            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }

            function cargarCarritoDeLocalStorage () {
                // ¿Existe un carrito previo guardado en LocalStorage?
                if (miLocalStorage.getItem('carrito') !== null) {
                    // Carga la información
                    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }

            // Eventos
            DOMbotonVaciar.addEventListener('click', vaciarCarrito);

            // Inicio
            cargarCarritoDeLocalStorage();
            renderizarProductos();
            calcularTotal();
            renderizarCarrito();
        }

    
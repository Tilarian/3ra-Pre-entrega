import { agregarAlCarrito, eliminarDelCarrito, inicializarProductos } from "./utility.js";

const app = document.querySelector("#app");
const carritoButton = document.querySelector("#carrito_button");
const limpiarCarrito = document.querySelector("#borrar_carrito");
const arrayDeProductos = [];
const contador = document.querySelector("#contador");
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
contador.innerHTML = ArrayCarrito.length;
let idUniversal = 1;

inicializarProductos(arrayDeProductos, idUniversal);

// BOTON LIMPIAR CARRITO
limpiarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás revertirlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Vaciar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Listo!',
                'Tu carrito está vacío.',
                'success'
            )
            ArrayCarrito = [];
            localStorage.removeItem("carrito");
            app.innerHTML = "No hay elementos en el carrito";
        }
    })
})

// RECORRO EL ARRAY Y PRINTEO EN "APP"
arrayDeProductos.forEach((el) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `


    // BOTON AGREGAR AL CARRITO // SWEETALERT
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click", () => {
        agregarAlCarrito(ArrayCarrito, el);
        localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
        contador.innerHTML = ArrayCarrito.length;
        Swal.fire({

            position: 'center',
            icon: 'success',
            title: 'El producto se agregó correctamente',
            showConfirmButton: false,
            timer: 2500
        })
    })

    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})


// BOTON CARRITO // CONTADOR Y PRECIO FINAL
carritoButton.addEventListener("click", () => {
    app.innerHTML = '';
    ArrayCarrito.forEach((el, i) => {
        const tarjeta = document.createElement("div");
        tarjeta.id = el.id;
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div>
                       
        `
        // BOTON ELIMINAR PRODUCTO 
        const buttonEliminar = document.createElement("a");
        buttonEliminar.href = "#";
        buttonEliminar.id = "quitar_button"
        const imgButtonEliminar = document.createElement("img");
        imgButtonEliminar.src = "IMG/trashcan.png";
        buttonEliminar.append(imgButtonEliminar);
        buttonEliminar.addEventListener("click", (e) => {
            eliminarDelCarrito(ArrayCarrito, el.id);
            contador.innerHTML = ArrayCarrito.length;
            localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
            Swal.fire({
                position: "center",
                icon: "success",
                title: "El producto se eliminó correctamente",
                showConfirmButton: false,
                timer: 2500,
            });
            tarjeta.remove(document.getElementsByClassName('tarjeta')[i]);
        });

        tarjeta.append(buttonEliminar);
        app.appendChild(tarjeta);

    })

    let total = ArrayCarrito.reduce((contadorProductos, el) => contadorProductos + el.precio, 0)

    //MomentJS 
    const toDay = moment().format('llll');
    const toDaySplit = toDay.split(',')
    const toDayParse = `${toDaySplit[0]}/${toDaySplit[1]}/${toDaySplit[2]}`

    Toastify({
        text: `Tienes ${ArrayCarrito.length} productos en tu carrito con un total de $${total}. \n Click para finalizar compra`,
        duration: 3000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: () => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias por tu compra! \n Nº de factura ######## \n Fecha:' + toDayParse,
                showConfirmButton: false,
                timer: 3000
            }).then(() => {
                ArrayCarrito = [];
                contador.innerHTML = ArrayCarrito.length;
                localStorage.removeItem("carrito");
                app.innerHTML = "No hay elementos en el carrito";
            })
        } // Callback after click
    }).showToast();
})
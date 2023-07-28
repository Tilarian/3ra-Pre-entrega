import { agregarAlCarrito, inicializarProductos } from "./utility.js";

const app = document.querySelector("#app");
const carritoButton = document.querySelector("#carrito_button");
const input = document.querySelector("#search_bar");
const arrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
let productoEncontrado = {};

inicializarProductos(arrayDeProductos);


input.addEventListener("input", (event) => {
    console.log(event.target.value)
    productoEncontrado = arrayDeProductos.find(el => el.nombre === event.target.value)

})

input.addEventListener("keypress", (event) => {
    (event.key === "Enter" && productoEncontrado) && console.log("El producto es:", productoEncontrado)
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
    ArrayCarrito.forEach(el => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div> 
                        <div>
                        <a href="#" id="quitar_button"><img src="IMG/trashcan.png" alt="" id="${el.id}"></a>
                        </div>
        `

        app.appendChild(tarjeta);

    })

    let total = ArrayCarrito.reduce((contadorProductos, el) => contadorProductos + el.precio, 0)

    Toastify({
        text: `Tienes ${ArrayCarrito.length} productos en tu carrito con un total de $${total}.`,
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
                title: 'Gracias por tu compra!',
                showConfirmButton: false,
                timer: 3000
            })
        } // Callback after click
    }).showToast();
})

const finalizarCompra = () => {

    ArrayCarrito = []
    localStorage.remove("carrito")

}

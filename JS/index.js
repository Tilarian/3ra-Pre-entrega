import { Producto, agregarAlCarrito } from "./clases.js";


const arrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
let idUniversal = 1;














// PRODUCTOS
const celular1 = new Producto({
    nombre: "Samsung Galaxy S23",
    precio: 1299,
    categoria: "celulares",
    id: idUniversal++,
    url: "./IMG/celular1.jpg"
});
arrayDeProductos.push(celular1);

const celular2 = new Producto({
    nombre: "Iphone 13",
    precio: 1799,
    categoria: "celulares",
    id: idUniversal++,
    url: "./IMG/celular2.jpg"
});
arrayDeProductos.push(celular2);

const auricular1 = new Producto({
    nombre: "Auriculares Hyperx Cloud 2",
    precio: 69,
    categoria: "perifericos",
    id: idUniversal++,
    url: "./IMG/auricular1.jpg"
});
arrayDeProductos.push(auricular1);

const auricular2 = new Producto({
    nombre: "Auriculares Logitech G Pro",
    precio: 119,
    categoria: "perifericos",
    id: idUniversal++,
    url: "./IMG/auricular2.jpg"
});
arrayDeProductos.push(auricular2);

const consola1 = new Producto({
    nombre: "Playstation 5",
    precio: 2599,
    categoria: "consolas",
    id: idUniversal++,
    url: "./IMG/consola1.jpg"
});
arrayDeProductos.push(consola1);

const consola2 = new Producto({
    nombre: "Xbox Series X",
    precio: 2399,
    categoria: "consolas",
    id: idUniversal++,
    url: "./IMG/consola2.jpg"
});
arrayDeProductos.push(consola2);

const monitor1 = new Producto({
    nombre: "Monitor ASUS Gaming VG279Q 27″ 144hz",
    precio: 699,
    categoria: "monitores",
    id: idUniversal++,
    url: "./IMG/monitor1.jpg"
});
arrayDeProductos.push(monitor1);

const monitor2 = new Producto({
    nombre: "Monitor Samsung UE570 28″ UHD 4K",
    precio: 989,
    categoria: "monitores",
    id: idUniversal++,
    url: "./IMG/monitor2.jpg"
});
arrayDeProductos.push(monitor2);

const notebook1 = new Producto({
    nombre: "Notebook ASUS GL702VI Gaming",
    precio: 3599,
    categoria: "notebooks",
    id: idUniversal++,
    url: "./IMG/notebook1.jpg"
});
arrayDeProductos.push(notebook1);













let productoEncontrado = {};

const app = document.querySelector("#app");
const carritoButton = document.querySelector("#carrito_button");
const input = document.querySelector("#search");

input.addEventListener("input", (event) => {
    console.log(event.target.value)
    productoEncontrado = arrayDeProductos.find(el => el.nombre === event.target.value)

})

input.addEventListener("keypress", (event) => {
    (event.key === "Enter" && productoEncontrado) && console.log("El producto es:", productoEncontrado)
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

const finalizarCompra = () => {

    ArrayCarrito = []
    localStorage.remove("carrito")

}

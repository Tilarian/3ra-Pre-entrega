const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
if(ArrayCarrito === null) {
        ArrayCarrito = []
}
let idUniversal = 1;

// CLASE CONSTRUCTORA  
class Producto {
        constructor(nombre, precio, categoria, id, url) {
                this.nombre = nombre;
                this.precio = precio;
                this.categoria = categoria;
                this.id = id;
                this.url = url;
        }
}

// PRODUCTOS
const celular1 = new Producto("Samsung Galaxy S23", 1000, "celulares", idUniversal++, "./IMG/celular1.jpg");
ArrayDeProductos.push(celular1);

const celular2 = new Producto("Iphone 13", 1000, "celulares", idUniversal++, "./IMG/celular2.jpg");
ArrayDeProductos.push(celular2);

const auricular1 = new Producto("Auriculares Hyperx Cloud 2", 1000, "perifericos", idUniversal++, "./IMG/auricular1.jpg");
ArrayDeProductos.push(auricular1);

const auricular2 = new Producto("Auriculares Logitech G Pro", 1000, "perifericos", idUniversal++, "./IMG/auricular2.jpg");
ArrayDeProductos.push(auricular2);

const consola1 = new Producto("Playstation 5", 1000, "consolas", idUniversal++, "./IMG/consola1.jpg");
ArrayDeProductos.push(consola1);

const consola2 = new Producto("Xbox Series X", 1000, "consolas", idUniversal++, "./IMG/consola2.jpg");
ArrayDeProductos.push(consola2);

const monitor1 = new Producto("Monitor ASUS Gaming VG279Q 27″ 144hz", 1000, "monitores", idUniversal++, "./IMG/monitor1.jpg");
ArrayDeProductos.push(monitor1);

const monitor2 = new Producto("Monitor Samsung UE570 28″ UHD 4K", 1000, "monitores", idUniversal++, "./IMG/monitor2.jpg");
ArrayDeProductos.push(monitor2);

const notebook1 = new Producto("Notebook ASUS GL702VI Gaming", 1000, "notebooks", idUniversal++, "./IMG/notebook1.jpg");
ArrayDeProductos.push(notebook1);


const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");

buttonHeader.addEventListener("click", ()=>{
    app.innerHTML = ''
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

})

ArrayDeProductos.forEach((el)=>{
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click",()=>{
        ArrayCarrito.push(el);
        localStorage.setItem("carrito",JSON.stringify(ArrayCarrito))
    })

    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})

const finalizarCompra = () =>{
    // PRECESO SDE PAGO
    //
    //
    ArrayCarrito = []
    localStorage.remove("carrito")

}

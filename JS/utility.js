// CLASE CONSTRUCTORA  
export class Producto {
    constructor(productoRecibidoPorParametro) {
        const { nombre, precio, categoria, id, url } = productoRecibidoPorParametro;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.id = id;
        this.url = url;
    }
}

// INICIALIZACION DE PRODUCTOS
export function inicializarProductos(arrayDeProductos, idUniversal) {
    
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
}


export const agregarAlCarrito = (carrito, producto) => {
    carrito.push(producto)
}

export const eliminarDelCarrito = (carrito, index) => {
    let storageIndex = carrito.findIndex((e) => e.id === index);
    carrito.splice(storageIndex, 1);
}

export default {agregarAlCarrito, eliminarDelCarrito};

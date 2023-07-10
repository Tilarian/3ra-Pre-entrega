// CLASE CONSTRUCTORA  
export class Producto {
    constructor(nombre, precio, categoria, id, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.id = id;
        this.url = url;
    }
}

export const agregarAlCarrito = (carrito, producto) => {
    carrito.push (producto)
}
// CLASE CONSTRUCTORA  
export class Producto {
    constructor(productoRecibidoPorParametro) {
        const {nombre, precio, categoria, id, url} = productoRecibidoPorParametro;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.id = id;
        this.url = url;
    }
}

export const agregarAlCarrito = (carrito, producto) => {
    carrito.push(producto)
}

export default agregarAlCarrito;
/*Creá una clase Producto con nombre y precio, un método tieneDescuento() 
que devuelva true si el precio es mayor a 10000, una función externa mostrarProducto()
 que use ese método para imprimir si el producto tiene descuento o no, 
 un array con al menos 3 productos con sus datos, y un for que recorra ese array, 
 cree un objeto Producto por cada uno, y lo pase a mostrarProducto(). */

 class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    tieneDescuento(){
        return this.precio > 10000;
    }
 }

 function mostrarProducto(producto){
    if(producto.tieneDescuento()){
        console.log(`El producto ${producto.nombre} tiene descuento con un valor de: ${producto.precio}`);
    } else{
        console.log(`El producto ${producto.nombre} no tiene descuento`);
    }
 }

 let producto = [
    {nombre: "Lapiz", precio: 500},
    {nombre: "Kit escolar", precio: 12000},
    {nombre: "Cartuchera", precio: 3500}
 ]

 for(let i = 0; i < producto.length; i++){
    let productoObj = new Producto(producto[i].nombre, producto[i].precio)
    mostrarProducto(productoObj);
 }


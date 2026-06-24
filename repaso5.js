/*
Una clase Producto con nombre y precio, un método esEconomico() que devuelva true si el precio es menor a 5000,
 una función externa mostrarProducto() que imprima si es económico o no, 
 y el readline que le pregunte al usuario el nombre y precio del producto, cree el objeto y llame a mostrarProducto().
*/

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    esEconomico(){
        return this.precio < 5000
        }
    
}

function mostrarProducto(producto){
    if(producto.esEconomico()){
        console.log(`El producto ${producto.nombre} es economico.`);
    }else{
        console.log(`El producto ${producto.nombre} no es economico.`);
    }
}

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese el nombre del producto: ', (nombre) => {
    rl.question('Ingrese el precio del producto: ', (precio) =>{
        const producto = new Producto(nombre, parseFloat(precio));
        mostrarProducto(producto);
        rl.close();
    })
})
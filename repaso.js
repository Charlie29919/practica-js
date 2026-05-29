/*
let persona ={
    nombre: "Carlos", 
    edad: 20, 
    activo: true
}

let persona2 = {
    nombre: "Maria", 
    edad: 22, 
    activo: false,
}

let producto = {
    nombre: "Carro Need For Speed",
    precio: 20000,
    disponible: true,
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.activo)

console.log(persona2.nombre)
console.log(persona2.edad)
console.log(persona2.activo)

console.log(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

function MostrarProducto(producto){
    console.log(`Producto: ${producto.nombre}`)
    console.log(`Precio: ${producto.precio}`)
    console.log(`Disponible: ${producto.disponible}`)
}

MostrarProducto(producto)

Creá una función llamada calcularPromedio que reciba un array de 5 números, los sume todos con un for, y devuelva el promedio.
Ejemplo de cómo llamarla:
let notas = [80, 90, 75, 60, 95]
console.log(calcularPromedio(notas))
Debe imprimir 80.


let notas = [80, 90, 75, 60, 95]
suma = 0;
SacarPromedio = 0;

function calcularPromedio(notas){

for(let i = 0; i< notas.length; i++){
    suma += notas[i];
}
SacarPromedio = suma / notas.length;
return SacarPromedio
}

console.log(calcularPromedio(notas))

-------------------------------------------------------------

Escribí una función llamada analizarPrecios que reciba ese objeto y muestre en consola:
Mayor precio: 3200
Menor precio: 600
Promedio: 1640

*/


let productos = {
    producto1: 1500,
    producto2: 800,
    producto3: 3200,
    producto4: 600,
    producto5: 2100
}

function analizarPrecios(productos){
    let suma = 0;
    let Promedio = 0;
    let Mayor = 0;
    let Menor = productos.producto1;
    let cantidad = Object.keys(productos).length


    for(let i in productos){
        suma += productos[i]          // acumular la suma

        Promedio = suma / cantidad;
    if(productos[i] > Mayor){     // encontrar el mayor
        Mayor = productos[i]
}
    if(productos[i] < Menor){
        Menor = productos[i]
    }
    }
    
    console.log(`Mayor precio: ${Mayor}`)
    console.log(`Menor precio: ${Menor}`)
    console.log(`Promedio: ${Promedio}`)

}

analizarPrecios(productos)

console.log("Esto lo escribí en rama-practica")
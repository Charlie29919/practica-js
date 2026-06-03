/* //Ejercicio 1:
Ejercicio 1 — Variables
Sin ver ejemplos, escribí tres variables:

Una que guarde tu nombre
Una que guarde tu edad
Una que guarde si estás activo o no

Y mostralas con console.log. 

---------------------------------------------------------------------

let nombre = "Carlos";
let edad = 20;
let activo = true;

console.log(nombre);
console.log(edad);
console.log(activo);

---------------------------------------------------------------------
//Ejercicio 2:

Ejercicio 2 — Condicional
Creá una variable temperatura con el valor 35 y mostrá en consola:

"Hace calor" si es mayor a 30
"Temperatura normal" si está entre 15 y 30
"Hace frío" si es menor a 15


let temperatura = 10;

if(temperatura >= 30){
    console.log("Hace calor")
}else if(temperatura >= 15){
        console.log("Temperatura normal")
}else{
        console.log("Hace frio")
}

---------------------------------------------------------------------
//Ejercicio 3:
Escribí una función llamada calcularDescuento que reciba dos parámetros: precio y descuento, 
y devuelva el precio final después de aplicar el descuento.



function calcularDescuento(precio, descuento){
    let total = precio - (precio * descuento / 100)
    //return `El monto total es de: ${total}`
    return total
}

console.log(calcularDescuento(20000, 20))

function factura(total, IVA){
    let montoConIVA = total + (total * IVA / 100)
        console.log(`Total con IVA: ${montoConIVA}`)
}

let resultado = calcularDescuento(20000, 20)
factura(resultado, 13)

---------------------------------------------------------------------
//Ejercicio 4:

Un array llamado estudiantes con 4 nombres, y recorrélo con un for que imprima cada nombre.


let estudiantes = ["Carlos", "Ana", "Sebastian", "Charlote"]

for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i])
}

---------------------------------------------------------------------

//Ejercicio 5:

Escribí un objeto llamado estudiante con estas propiedades: nombre, edad y carrera. Mostrá las tres con console.log.


let estudiante = {nombre: "Carlos", edad: 20, carrera: "TI"}

console.log(estudiante.nombre, estudiante.edad, estudiante.carrera)

---------------------------------------------------------------------
//Ejercicio 6:

Creá un array llamado estudiantes que contenga 3 objetos, cada uno con nombre y nota. Luego recorrélo con un for y mostrá el nombre y la nota de cada uno.


let estudiantes = [
    {nombre: "Carlos", edad: 20, carrera: "TI"},
    {nombre: "Michael", edad: 21, carrera: "Futbolista"},
    {nombre: "Maria", edad: 20, carrera: "Biologia"},
    {nombre: "Enrique", edad: 25, carrera: "Arqueologia"}
]

for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre, estudiantes[i].edad, estudiantes[i].carrera)
}

---------------------------------------------------------------------
//Ejercicio 7:

Escribí una función llamada promedioNotas que reciba un array de objetos, cada uno con nombre y nota, y muestre en consola el nombre de cada estudiante con su nota, y al final el promedio general.

*/

let estudiantes = [
    {nombre: "Carlos", edad: 20, carrera: "TI", materia: "Programación", nota: 90},
    {nombre: "Michael", edad: 21, carrera: "Futbolista", materia: "Entrenamiento", nota: 88},
    {nombre: "Maria", edad: 20, carrera: "Biologia", materia: "RHH", nota: 92},
    {nombre: "Enrique", edad: 25, carrera: "Arqueologia", materia: "Fosiles", nota: 78}
]

function promedioNotas(estudiantes){
    let totalnotas = 0;

for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre, estudiantes[i].edad, estudiantes[i].carrera, estudiantes[i].materia, estudiantes[i].nota)
        totalnotas += estudiantes[i].nota;

}
    let promedio = totalnotas / estudiantes.length
    console.log(promedio)

}

promedioNotas(estudiantes)
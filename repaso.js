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

---------------------------------------------------------------------
//Ejercicio 8:
forEach


let numeros = [10, 20, 30]

numeros.forEach(function(numero){
    console.log(numero)
})

let nombres = ["Carlos", "Ana", "Mateo"]

nombres.forEach(function(nombre){
    console.log(nombre)
})

let coches =["Camaro","Chevi","Honda civic"]

coches.forEach(function(Carro){
    console.log(`Carros disponibles: ${Carro}`)
})

---------------------------------------------------------------------
//Ejercicio 9:
filter


let numeros = [12, 34, 56, 78, 910]

let mayores = numeros.filter(function(numero){
    return numero > 30
})

console.log(mayores)


let nombres = ["Carlos", "Esteban", "Juan"]

let filtroNombres = nombres.filter(function(fNombres){
    return fNombres.length <= 4
})

console.log(filtroNombres)

let salarios = ["20000", "15000", "25000", "100000"]

let filtrarSalarios = salarios.filter(function(Salario){
    return Salario.length >= 6
})

console.log(filtrarSalarios)


let numeros = [10, 20, 30]

let dobles = numeros.map(function(numero){
    return numero * 2
})

console.log(dobles)


let precios = [1000, 2000, 3000, 4000]

let descuentos = precios.map(function(descuento){
    return descuento - (descuento * 10 / 100)
})

console.log(descuentos)


let numeros = [10, 20, 30, 40]

let suma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
},0
)
console.log(suma)


let precios = [500, 1200, 800, 3000, 150]

let calculoPrecios = precios.reduce(function(acomulador, precio){
    return acomulador + precio
},0)

console.log(calculoPrecios)


let numeros = [10, 20, 30]

let listar = numeros.forEach(function(numero){
    console.log(numero)
})

let Fnumeros = [12, 14, 10, 7, 25]

let filtrarnumeros = Fnumeros.filter(function(Fnumero){
    return Fnumero >= 10
})

console.log(filtrarnumeros)

let cambios = [22, 33, 44]

let hacerCambios = cambios.map(function(cambio){
    return cambio * 7
})

console.log(hacerCambios)

let fusionar = [10, 20, 30, 40]

let realizarFusion = fusionar.reduce(function(acumulador, fusion){
    return acumulador + fusion
},0)

console.log(realizarFusion)


let empresarios = ["Carlos", "Ana", "Esteban", "Claudia"]
let sueldosEmpresarios = [20000, 50000, 25000, 35000]

let listarEmpresarios = empresarios.forEach(function(listEmpresarios){
    console.log(listEmpresarios)
})

let filtrarEmpresarios = empresarios.filter(function(filtEmpresarios){
    return filtEmpresarios.length < 4 
})

console.log(filtrarEmpresarios)

let aumentarSueldos = sueldosEmpresarios.map(function(aumentSueldos){
    return aumentSueldos + 10000
})

console.log(aumentarSueldos)

let totalsueldos = sueldosEmpresarios.reduce(function(acumulador, ttsueldos){
    return acumulador + ttsueldos
},0)

console.log(totalsueldos)


let nombres = ["Marcos", "Daniel", "Josue", "Byron"]
let numeros = [12, 30, 64, 56]

let xxx = nombres.forEach(function(list){
     console.log(list)
}) 
   
let yyy = nombres.filter(function(filt){
    return filt.length < 10
})

console.log(yyy)

let mmm = nombres.map(function(like){
    return like + "XDXDXD"
})

console.log(mmm)

let rrr = numeros.reduce(function(suma, uno){
    return suma + uno
},0)

console.log(rrr)



function suma(a, b){
    return a * b
}

let camnaron = suma(30, 29)
console.log(camnaron)


class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }
}

let Persona1 = new Persona("Carlos", 20)
let Persona2 = new Persona("Ana", 22)

console.log(Persona1.nombre)
console.log(Persona2.edad)



let nombre = "Charlie";
let edad = 18;

console.log(`Mi nombre es ${nombre} y tengo ${edad}`)


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('¿Cuál es tu nombre? ', function(respuesta){
    console.log(`Hola, ${respuesta}`)
    rl.close()
})


const readline = require('readline')

const escribir = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

escribir.question('Cual es tu nombre? ', function(respuesta){
    console.log(`Hola, ${respuesta}`)
    escribir.close()
})


class Persona{
constructor(nombre, edad){
this.nombre = nombre
this.edad = edad
}
presentarse(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
}
}

class Mascota{
    constructor(nombreMascota, edadMascota, razaMascota){
        this.nombreMascota = nombreMascota
        this.edadMascota = edadMascota
        this.razaMascota = razaMascota
    }
    infoMascotas(){
        console.log(`y mi mascota se llama ${this.nombreMascota}, tiene ${this.edadMascota} y es un ${this.razaMascota}`)
    }
}

let Persona1 = new Persona("Carlos", 20)
let Persona2 = new Persona("Carolina", 24)
let Mascota1 = new Mascota("Dante", 5, "Aleman")
let Mascota2 = new Mascota("Zeus", 4, "Gran Danes")
Persona1.presentarse() 
Mascota1.infoMascotas()
Persona2.presentarse()
Mascota2.infoMascotas()

//Mascota1.infoMascotas()
//Mascota2.infoMascotas()


class Producto{
    constructor(nombreProducto, precioProducto, cantidadProducto){
        this.nombreProducto = nombreProducto
        this.precioProducto = precioProducto
        this.cantidadProducto = cantidadProducto
    }
    mostrarinfoproducto(){
        console.log(`El nombre del producto es: ${this.nombreProducto} y su precio es de: ${this.precioProducto} con una cantidad de: ${this.cantidadProducto}`)
    }
}

let Producto1 = new Producto("Maicena tio Juan", 2200, 20)
Producto1.mostrarinfoproducto()


const readline = require('readline')

const escribir = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

escribir.question('Cual es tu nombre? ', function(respuesta){
    //función anidada
    escribir.question('Cual es tu edad? ', function(respuesta2){
    console.log(`Mi nombre es ${respuesta} y tengo ${respuesta2} años`)

let nombre = "Carlos";
let edad = 20;

console.log(`mi nombre es ${nombre} y tengo ${edad} años`)

    escribir.close()
    })
})



const readline = require('readline')

const intfProductos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

intfProductos.question('Cual es el nombre del producto?? ', function(respuesta){
    intfProductos.question('Cual es el precio del producto?? ', function(respuesta2){
        console.log(`El nombre del producto es: ${respuesta} y su precio es de: ${respuesta2}`)
        intfProductos.close()
    })
})


const readline = require('readline')

const intfAnimales = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

intfAnimales.question('Cual es el nombre de tu mascota? ', function(respuesta){
    intfAnimales.question('Cual es la edad de tu mascota? ', function(respuesta2){
        intfAnimales.question('Cual es el peso en kg de tu mascota? ', function(respuesta3){
            console.log(`La mascota se llama ${respuesta}, tiene ${respuesta2} años y su peso es de ${respuesta3} kg`)
            intfAnimales.close()
        })
    })
})


class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }


presentarse(){
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
}
}

let Persona1 = new Persona("Carlos", 20)
Persona1.presentarse()


class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }

    aprobado() {
        return this.nota >= 70
    }
}

function mostrarResultado(estudiante) {
    if (estudiante.aprobado()) {
        console.log(`${estudiante.nombre} aprobó con ${estudiante.nota}`)
    } else {
        console.log(`${estudiante.nombre} no aprobó, sacó ${estudiante.nota}`)
    }
}

let Estudiante1 = new Estudiante("Carlos", 65)
let Estudiante2 = new Estudiante("Ana", 85)
mostrarResultado(Estudiante1)
mostrarResultado(Estudiante2)



class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }

    aprobado() {
        return this.nota >= 70
    }
}

function mostrarResultado(estudiante) {
    if (estudiante.nota >= 90) {
        console.log(`${estudiante.nombre} aprobó con honores, sacó ${estudiante.nota}`)
    } else if (estudiante.nota >= 70) {
        console.log(`${estudiante.nombre} aprobó con ${estudiante.nota}`)
    } else {
        console.log(`${estudiante.nombre} no aprobó, sacó ${estudiante.nota}`)
    }
    console.log("¿Sigue funcionando aprobado()?", estudiante.aprobado())
}

let Estudiante1 = new Estudiante("Carlos", 65)
let Estudiante2 = new Estudiante("Ana", 85)
let Estudiante3 = new Estudiante("Luis", 95)

mostrarResultado(Estudiante1)
mostrarResultado(Estudiante2)
mostrarResultado(Estudiante3)

---------------------------------------------------------------------------
Consigna: Creá una clase Producto con nombre y precio. Agregale un método tieneDescuento() 
que devuelva true si el precio es mayor a ₡10,000, o false si no. Después creá una función 
externa mostrarProducto(producto) que use ese método para imprimir si el producto tiene descuento o no.
*/

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    tieneDescuento(){
        return this.precio > 10000
    }
}

function mostrarProducto(producto){
    if(producto.tieneDescuento()){
        console.log(`El producto ${producto.nombre} tiene descuento`)
    }
    else{
            console.log(`El producto ${producto.nombre} no tiene descuento`)
    }
    
}

let datosProductos = [
    {nombre: "Laptop", precio: 15000},
    {nombre: "Mouse", precio: 5000},
    {nombre: "Teclado", precio: 8000},
    {nombre: "Monitor", precio: 12000}
]

for(let i = 0; i < datosProductos.length; i++){
    let producto = new Producto(datosProductos[i].nombre, datosProductos[i].precio)
    mostrarProducto(producto)
}
/*

let nombre = "Carlos";
let edad = 20;
let carrera = "Tecnologias de la Información";

console.log("Nombre :" + nombre);
console.log("edad :" + edad);
console.log("carrera :" + carrera);

let saludar = "hola al que este leyendo esto, me llamo " + nombre + " y tengo " + edad + " años";
console.log(saludar);

let precio = 5000;
let cantidad = 3;
let total = precio * cantidad;

console.log("Precio unitario: " + precio);
console.log("Cantidad unitaria: " + cantidad);
console.log("Total a pagar: " + total);

---------------------------------------------------------------------

let nota = 62;
if (nota >= 70){
    console.log("Aprovado")
} else if (nota >= 60){
console.log("Reposicion")
}
else{
    console.log("Reprobado")
}

---------------------------------------------------------------------

function evaluarnota(nota){
   if (nota >= 70){
    console.log("Aprovado")
} else if (nota >= 60){
console.log("Reposicion")
}
else{
    console.log("Reprobado")
} 
}

evaluarnota(80)
evaluarnota(62)
evaluarnota(50)

----------------------------------------------------------------------

for(let i = 1; i<=5; i++){
    console.log("El numero es: " + i)
}

----------------------------------------------------------------------

let i = 1

while(i <= 5){
    console.log("Mi numero es: " + i)
    i++
}

----------------------------------------------------------------------

let notas = [30, 45, 80, 75, 90];

function evaluarnotas(notas){
for(let i = 0; i < notas.length; i++){
if(notas[i] >= 70){
    console.log("Aprovado :p")
} 
else if(notas[i] >= 60){
    console.log("En recuperacion :|")
}
else{
    console.log("Reprovado >:v")
}
}
}

evaluarnotas(notas)

-------------------------------------------------------------------------

let precios= [1500, 2000, 800, 3500, 1200];
let total = 0;

for (let i = 0; i < 5; i++){
    total = total + precios[i]
}

    console.log("El monto total es: " + total)

---------------------------------------------------------------------------
    
let salarios = [250000, 800000, 450000, 1200000, 150000];


function Calificarsalarios(salarios){
for(i = 0; i < salarios.length; i++){
    if(salarios[i] >= 800000){
        console.log("Salario Alto")
    }
    else if(salarios[i] >= 400000){
        console.log("Salario Medio")
    }
    else{
        console.log("Salario bajo")
    }
}
}
    Calificarsalarios(salarios)


Mayor o igual a 800,000 → "Salario Alto"
Mayor o igual a 400,000 → "Salario Medio"
Menor a 400,000 → "Salario Bajo"

-----------------------------------------------------------------

Creá un programa que tenga una lista de 5 productos con sus precios y que muestre:

El nombre del producto
Si es Caro (más de 10,000), Moderado (entre 5,000 y 10,000) o Barato (menos de 5,000)


let productos = ["Arroz", "Televisor", "Café", "Celular", "Pan"];
let precios = [1200, 85000, 2500, 45000, 800];
function MostrarPP(productos, precios){
for(i = 0; i < productos.length; i++){
if(precios[i] > 10000){
    console.log("El " + productos[i] + " es Caro")
} else if(precios[i] >= 5000){
    console.log("El " + productos[i] + " es de precio moderado")
}else{
    console.log("El " + productos[i] + " es barato")
}
}
}

MostrarPP(productos, precios)

-------------------------------------------------------------------

Sumá todas las notas con un for
Dividí entre la cantidad de notas para sacar el promedio
Si el promedio es mayor o igual a 70 → Aprobó, si no → Reprobó

let notas = [85, 62, 45, 70, 58];
function SumarNotas(notas){
    Total = 0;


    for(i = 0; i < notas.length; i++){
        Total += notas[i]
    }

        let Promedio = Total / notas.length 


        if(Promedio >= 70){
            console.log("Aprobo")
        }else{
            console.log("Reprobo")
        }
    } 

SumarNotas(notas)

---------------------------------------------------------------------

let temperaturas = [22, 35, 18, 40, 28, 31];

function encontrarMayor(temperaturas) {
    let mayor = temperaturas[0];

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > mayor) {
            mayor = temperaturas[i];
        }
    }

    console.log("La temperatura más alta fue: " + mayor);
}

encontrarMayor(temperaturas);

------------------------------------------------------------------------

let numeros = [4, 7, 12, 9, 20];
Pares = 0
Impares = 0
for(i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        ++Pares
    }else{
        ++Impares
    }
}
console.log("Son pares: " + Pares)
console.log("Son impares: " + Impares)

------------------------------------------------------------------------

Creá una función que reciba una lista de 5 precios y muestre si cada uno es Caro (más de 50,000), Normal (entre 10,000 y 50,000) o Barato (menos de 10,000).
Los precios son:
let precios = [5000, 75000, 25000, 120000, 8000];


let precios = [5000, 75000, 25000, 120000, 8000]

function listaprecios(precios){
    for(i = 0; i < precios.length; i++){
        if(precios[i] >= 50000){
            console.log(precios[i] + " Es caro")
        }else if(precios[i] > 10000){
            console.log(precios[i] + " Es normal")
        }else{
            console.log(precios[i] + " Es bajo")
        }
    }
}
listaprecios(precios)

---------------------------------------------------------------------------

Creá una función que reciba una lista de nombres y salude a cada uno, pero si el nombre es "Carlos" que diga "Hola jefe!" en lugar del saludo normal:
let nombres = ["Ana", "Carlos", "Luis", "María", "Carlos"];


let nombres = ["Ana", "Carlos", "Luis", "Maria", "Carlos"];

function saludar(nombres){
    for(i = 0; i < nombres.length; i++){
        if(nombres[i] === "Carlos"){
            console.log("Hola jefe")
        }else{
            console.log("Saludos " + nombres[i])
        }
    }
}
saludar(nombres)

---------------------------------------------------------------------

Creá una función que reciba una lista de 5 edades y clasifique a cada persona como:

Niño (menos de 12)
Adolescente (entre 12 y 17)
Adulto (18 o más)

let edades = [8, 15, 25, 11, 19];



let edades = [8, 15, 25, 11, 19];

function MostrarEdades(edades){
for(i = 0; i < edades.length; i++){
    if(edades[i] >= 18){
        console.log("Adulto")
    }else if(edades[i] >= 12){
        console.log("Adolescente")
    }else{
        console.log("Niño")
    }
}
}
MostrarEdades(edades)

---------------------------------------------------------------------------
Creá una función que reciba una lista de 5 nombres y sus edades, y muestre solo los que son mayores de edad (18 o más):
let nombres = ["Ana", "Carlo", "Luis", "María", "Pedro"];
let edades = [15, 20, 17, 25, 16];

let nombres = ["Ana", "Carlos", "Luis", "Maria", "Pedro"]
let edades = [15, 20, 17, 25, 16]

function MostrarMayores(nombres, edades){
    for(i = 0; i < edades.length; i++){
        if(edades[i] >= 18){
            console.log(nombres[i] + " Es mayor de edad")
        }
    }
}

MostrarMayores(nombres, edades)

---------------------------------------------------------------------------


let nombres = ["Ana", "Carlos", "Luis", "Maria", "Pedro"]

i = 0; 

while(i < nombres.length){
    console.log(nombres[i])
    i++
}



let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

i = 0;

while(i < numeros.length){
    console.log(numeros[i])
    i++
}


let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}



let pares = 1;

while(pares < 21){
    if(pares % 2 === 0){
    console.log(pares)}
    pares++;
}

---------------------------------------------------------------------------

Usando for mostrá los números del 1 al 10, pero si el número es divisible entre 3 mostrá "Fizz" en lugar del número.


let impares = 0;

while(impares < 10){
    if(impares % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(impares)
    }
    impares++
}

---------------------------------------------------------------------------


let persona ={
    nombre: "Carlos",
    edad: 20,
    carrera: "Tecnologias de la Informacion",
    ciudad: "Cartago",
    universidad: "CUC"
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.carrera)
console.log(persona.ciudad)
console.log(persona.universidad)

---------------------------------------------------------------------------

let estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlo", nota: 62 },
    { nombre: "Luis", nota: 45 }
];

function Aprobados(estudiantes){
for(i = 0; i < estudiantes.length; i++){
    if(estudiantes[i].nota >= 70){
       // console.log(estudiantes[i].nombre + " Aprobo")
       console.log(`${estudiantes[i].nombre}   Aprobo`)
    }else{
       // console.log(estudiantes[i].nombre + " Reprobo")
       console.log(`${estudiantes[i].nombre} Reprobo`)
    }
}
}
Aprobados(estudiantes)

-------------------------------------------------------------------------------
Creá una lista de 3 productos con sus propiedades y mostrá solo los que están disponibles:
let productos = [
    { nombre: "Laptop", precio: 500000, disponible: true },
    { nombre: "Mouse", precio: 15000, disponible: false },
    { nombre: "Teclado", precio: 25000, disponible: true }
];


let productos = [
    {nombre : "Laptop", precio: 500000, disponibles: true},
    {nombre: "Mouse", precio: 15000, disponibles: false},
    {nombre: "Teclado", precio: 25000, disponibles: true}
]

function MostrarPropiedades(productos){
    for(i = 0; i < productos.length; i++){
        if(productos[i].disponibles === true){
            console.log(productos[i].nombre + " Esta disponible solo por: " + productos[i].precio)
        }else{}
    }
}

MostrarPropiedades(productos)

-------------------------------------------------------------------------------

function sumar(a,b) {
    return a + b;
}

let resultado = sumar(3,5);
console.log(resultado);

-------------------------------------------------------------------------------
Creá una función que reciba dos números y retorne el mayor de los dos.

function Nummayor(a, b){
    if(a > b){
        return a
    }else{
        return b
    }
}

let resultado = Nummayor(18, 9);
console.log(resultado)

-------------------------------------------------------------------------------

Creá un switch que reciba un número del 1 al 3 y muestre "Oro", "Plata" o "Bronce" según la posición.


let posiciones = 2;

switch(posiciones){
    case 1:
        console.log("Oro")
        break;

    case 2:
        console.log("Plata")
        break;

    case 3:
        console.log("Bronce")
        break;

    default:
        console.log("Numero erroneo")
}

-------------------------------------------------------------------------------


let persona = {
    nombre: "Carlos",
    edad: 20,
    institucion: "CUC",
    Carrera: "TI",

    saludar: function() {
        console.log(`Hola, yo me llamo ${this.nombre}`);
    }
};

persona.saludar()

-------------------------------------------------------------------------------
*/

let mascota = {nombre: "Manchas", edad_perruna: 15};

console.log(`Mi perrito se llama ${mascota.nombre} y tiene ${mascota.edad_perruna} añitos perrunos`);
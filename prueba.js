/*
let opciones = 1;

switch(opciones){
    case 0:
        let prueba = [0,1,2,3,4];
        let i = 0;
        while(i < prueba.length){
        console.log(`${prueba[i]}`)
        i++}
        break;
    case 1:
        let estudiantes = 
            [{Alumno: "Carlos", nota: 90},
            {Alumno: "Maria", nota: 75},
            {Alumno: "Raul", nota: 50}]

            for(let i = 0; i < estudiantes.length; i++)

            console.log(`Alumno: ${estudiantes[i].Alumno} con nota ${estudiantes[i].nota}`)
        break;
    case 2:
        console.log(`Miercoles`)
        break;
    default:
        console.log(`Opción invalida`)
}


function retumbar(a, b){
    return a + b;
}

let querico = retumbar(2,3);

console.log(querico)

-------------------------------------------------------------


Creá una función que reciba una lista de 5 números y muestre:

La suma total
El número mayor
Cuántos son pares



let numeros = [4, 7, 12, 9, 20];

function analizar(numeros) {
    let suma = 0;
    let mayor = numeros[0];
    let pares = 0;

    for (i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        if(numeros[i] % 2 === 0){
        pares++
        }
        if(numeros[i] > mayor){
            mayor = numeros[i]
        }

    }

    console.log(`La suma total es: ${suma}`)
    console.log(`El número mayor es: ${mayor}`)
    console.log(`Son pares: ${pares}`)
}

analizar(numeros);
























Creá una función que reciba una lista de 5 números y muestre:

La suma total
El número mayor
Cuántos son pares



let numeros = [12, 34, 56, 22, 10]



function analizar(numeros){
    let suma = 0;
    let mayor = numeros[0];
    let pares = 0;

    for(i = 0; i < numeros.length; i++){

        suma += numeros[i];
        if(numeros[i] > mayor){
            mayor = numeros[i]
        }
        if(numeros[i] % 2 === 0){
            pares++
        }
    }

    console.log(`La suma total es: ${suma}`)
    console.log(`El número mayor es: ${mayor}`)
    console.log(`Son pares: ${pares}`)
}

analizar(numeros)
------------------------------------------------------------

Creá una función que reciba una lista de 5 edades y muestre:

La edad promedio
Cuántas personas son mayores de edad (18 o más)
La edad menor


let edades = [12, 34, 15, 60, 43]

function analizar_edades(edades){
    promedio = 0
    menor = edades[0]

    for(i = 0; i < edades.length; i++){
        promedio += edades[i] / edades.length
        if(edades[i] >= 18){
            console.log(`${edades[i]} es mayor`)
        }else{
            console.log(`${edades[i]} es menor`)
        }
        if(edades[i] < menor){
            menor = edades[i]
            menor++
        }

    }

    console.log(`El promedio de edades es: ${promedio}`)
    console.log(`La edad más baja es ${menor}`)
}

analizar_edades(edades)

------------------------------------------------------------

Creá una función que reciba una lista de 5 productos con nombre y precio, y muestre:

El producto más caro
El producto más barato
El precio promedio

let productos = [
    { nombre: "Laptop", precio: 850000 },
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Teclado", precio: 35000 },
    { nombre: "Monitor", precio: 420000 },
    { nombre: "Audífonos", precio: 25000 }
];
*/

let productos = [
    { nombre: "Laptop", precio: 850000 },
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Teclado", precio: 35000 },
    { nombre: "Monitor", precio: 420000 },
    { nombre: "Audífonos", precio: 25000 }
];

function analizar_productos(productos){
    promedio = 0;
    caro = 0;
    barato = 0;

for(i = 0; i < productos.length; i++){
    if(productos[i].precio > caro){
        caro = productos[i].precio
    }
    if(productos[i].precio < barato){
        barato = productos[i].precio
    }

    promedio += productos.precio / productos.length

}

    console.log(`El promedio es de: ${promedio}`)
    console.log(`El producto más caro es: ${caro}`)
    console.log(`El producto más barato es: ${barato}`)

}

analizar_productos(productos)
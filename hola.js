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



let nota = 62;
if (nota >= 70){
    console.log("Aprovado")
} else if (nota >= 60){
console.log("Reposicion")
}
else{
    console.log("Reprobado")
}


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



for(let i = 1; i<=5; i++){
    console.log("El numero es: " + i)
}


let i = 1

while(i <= 5){
    console.log("Mi numero es: " + i)
    i++
}


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


let precios= [1500, 2000, 800, 3500, 1200];
let total = 0;

for (let i = 0; i < 5; i++){
    total = total + precios[i]
}

    console.log("El monto total es: " + total)

*/
    
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


/*
Mayor o igual a 800,000 → "Salario Alto"
Mayor o igual a 400,000 → "Salario Medio"
Menor a 400,000 → "Salario Bajo"
*/
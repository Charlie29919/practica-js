

let estudiantes = [
    { nombre: "Ana", notas: [85, 90, 78] },
    { nombre: "Carlo", notas: [62, 70, 55] },
    { nombre: "Luis", notas: [45, 50, 60] },
    { nombre: "María", notas: [95, 88, 92] },
    { nombre: "Pedro", notas: [72, 68, 75] }
];

    let mejorPromedio = 0;
    let mejorEstudiante = "";
    let promediogeneral= 0;

for (let i = 0; i < estudiantes.length; i++) {
    let suma = 0;
    
    for (let j = 0; j < estudiantes[i].notas.length; j++) {
        suma += estudiantes[i].notas[j];
    }
    
    let promedio = suma / estudiantes[i].notas.length;
    //console.log(`${estudiantes[i].nombre}: ${promedio}`);

    if(promedio >= 70){
        console.log(` ${estudiantes[i].nombre} Aprobo con ${promedio} `)
    }else if(promedio >= 60){
        console.log(`${estudiantes[i].nombre} va a reposición con ${promedio}`)
    }else{
        console.log(`${estudiantes[i].nombre} reprobo con ${promedio}`)
    }


    if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        mejorEstudiante = estudiantes[i].nombre;
    }
    
    promediogeneral += promedio;
    

}
    
    console.log(`El estudiante con el mejor promedio  es ${mejorEstudiante}`)

console.log(`Promedio general: ${promediogeneral / estudiantes.length}`);

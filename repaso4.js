/*
La consigna: creá un programa que use readline para pedirle al usuario el nombre y salario de un empleado,
 luego cree un objeto Empleado con esos datos usando una clase, y 
 finalmente imprima si tiene bono o no (bono si el salario es mayor a 500000).
*/


class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    tieneBono(){
        return this.salario > 500000;
    }
}

function mostrarEmpleado(empleado){
    if(empleado.tieneBono()){
        console.log(`El empleado ${empleado.nombre} tiene bono`)
    }else{
        console.log(`El empleado ${empleado.nombre} no tiene bono`)
        }
    }


    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Ingrese el nombre del empleado:`, (nombre) => {
    rl.question('Ingrese el salario del empleado: ', (salario) => {
           const empleado = new Empleado(nombre, salario);
    mostrarEmpleado(empleado);
    rl.close(); 
    });

});
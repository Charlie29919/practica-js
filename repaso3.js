/*
Creá una clase Empleado con nombre y salario, un método tieneBono() 
que devuelva true si el salario es mayor a 500000, una función externa mostrarEmpleado() 
que imprima si tiene bono o no, un array con 3 empleados, y un for que recorra el array, 
cree cada objeto y lo pase a mostrarEmpleado().
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
        console.log(`El empleado ${empleado.nombre} tiene bono.`);
    } else{
        console.log(`El empleado ${empleado.nombre} no tiene bono.`);
    }
}


let empleados = [
    new Empleado("Juan", 600000),
    new Empleado("Maria", 450000),
    new Empleado("Pedro", 700000)
]

for(let i = 0; i < empleados.length; i++){
    mostrarEmpleado(empleados[i]);
}
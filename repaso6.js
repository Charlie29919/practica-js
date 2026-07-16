// ARRAY - cambiar ; por ,
let Animales = [
    {nombre: "James", tipo: "Canino"},
    {nombre: "Rock", tipo: "Lagarto"},
    {nombre: "Sisy", tipo: "Gatuno"}
]
// CLASE - quitar parámetros del nombre, agregar constructor
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    // MÉTODO - agregar $ en las variables y cerrar comillas
    describir() {
        console.log(`El animal ${this.nombre} es de tipo ${this.tipo}`)
    }
}
// FUNCIÓN - agregar function, cambiar parámetro a animal
function mostrarAnimal(animal) {
    // llamar al método acá
    animal.describir()
}
// FOR - corregir length, completar el cuerpo
for(let i = 0; i < Animales.length; i++) {
    let animal = new Animal(Animales[i].nombre, Animales[i].tipo)
    mostrarAnimal(animal)
}
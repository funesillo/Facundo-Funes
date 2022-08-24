class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

const nombre = "Facundo"
const apellido = "Funes"
let libros = [
    {nombre: "El Resplandor", autor: "Stephen King"},
    {nombre: "Los gatos de Ulthar", autor: "H.P. Lovecraft"}
]
const mascotas = [
    {nombre: "Titi", raza:"perro", id1: 1},
    {nombre: "Doby", raza:"gato", id2: 2},
]

console.log(nombre+apellido);

function contar (mascotas){
    let resultado = mascotas+1
    return resultado
}; 
let resultado = contar(1)
console.log(resultado);

libros.push({nombre: "el juguete rabioso", autor:"Roberto Arlt"})
console.log(libros);
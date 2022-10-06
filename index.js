/*//Importar el componente sumar
// commonJS 
const sumar = require(`./sumar`)
const estudiante = require (`./estudiante`)
// const restar = require(`./sumar`)
// const multiplicar = require(`./sumar`)
// const dividir = require(`./sumar`)

//Importar es6module
//import {sumar, restar, multiplicar, dividir} from './sumar.js'
//Tipos de variables

//let: variables
let a = 10

//const: contastes
const b=20

//Desestructurar objeto

let{ first_name,last_name } = estudiante

console.log(`suma de los numeros: ${sumar(a , b)}`.bgBlack.green.italic.bold)
console.log(`Id: ${estudiante.id}`)
console.log(`Nombre: ${first_name}`)
console.log(`Apellido: ${last_name}`)
console.log(`Altura: ${estudiante.heigth}`)*/
// console.log(`resta de los numeros: ${restar(a , b)}`.reset)
// console.log(`multiplicar de los numeros: ${multiplicar(a , b)}`.reset)
// console.log(`dividir de los numeros: ${dividir(a , b)}`.reset)
const colors = require(`colors`)
const materias = require (`./materias`)

//Recorrer materias

materias.forEach((materia)=>{
    if (materia.Instructor === "Cristian Buitrago") {
        console.log(`Nombre:${materia.Nombre}`.bgBlue.italic.bold);
        console.log(`Instructor:${materia.Instructor}`.bgBlack.italic.bold);
        console.log(`notas:${materia.notas}`.bgBlue.italic.bold);
        console.log(`tipo:${materia.tipo}`.bgBlack.italic.bold);
        console.log(``.bgBlack.italic.bold);
    }
})

//map : metodo de arreglos en es6
//crea un arreglo a partir de otro 
const profesores =materias.map((materia)=>{
    return materia.Instructor
})

//find: localizar elemento de un arreglo
//que cumplan cierta condicion
const PHP = materias.find((materia)=>{
    return materia.Instructor === "Cristian Buitrago"
})
//Filter: localizar elementos de un arreglo
//que cumplan cierta condicion
const JAVA = materias.filter((materia)=>{
    return materia.Instructor === "Cristian Buitrago"
})

console.log(JAVA)
console.log(PHP)
console.log(profesores)
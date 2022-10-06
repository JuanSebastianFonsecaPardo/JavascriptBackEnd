/*/funcion para sumar
function sumar( a, b){
    return a + b
}
//funcion para restar
function restar( a, b){
    return a - b
}
//funcion para nultiplicar
function multiplicar( a, b){
    return a * b
}
//funcion para dividir
function dividir( a, b){
    return a / b
}

//exportar: commonjs
module.exports = sumar;
module.exports = restar;
module.exports = multiplicar;
module.exports = dividir;

//exportar: esmodule
//export default sumar;*/

const sumar = (a, b) => a + b

module.exports = sumar;
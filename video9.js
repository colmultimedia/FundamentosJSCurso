var mateo = {
    nombre: 'mateo',
    apellido: 'Osorio',
    edad: 26
}

var dario = {
    nombre: 'Dario',
    apellido: 'peña',
    edad: 70
}

function imprimirNombre(persona){
    ///Lo siguiente evita que tengamos que especificarle
    var {apellido} = persona

    console.log(persona.nombre.toUpperCase())
    console.log(apellido.toUpperCase())
}

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona

    console.log(nombre.toUpperCase())
    console.log(' tiene '+ edad + ' Años')
}

imprimirNombreYEdad(mateo)
imprimirNombreYEdad(dario)


// Parámetros como referencia o como valor
// Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.
// Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. 
// Para solucionar esto se puede crear un objeto diferente. 
// Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.


function nombreNuevamente(persona){

    return{
        ...persona,
        // nombre: persona.nombre,
        // apellido: persona.apellido,
        edad: persona.edad + 1
   
}
var nombreMasViejo = persona
console.log(persona)
console.log(nombreMasViejo)

}

//////EJERCICIO VIDEO 11 COMPARANDO

var a= 1
var b = '1'


/// con el doble igual
console.log(a==b) //nos da igual porque contienen el mismo valor
/// con el triple igual
console.log(a===b)///nos da falso porque uno es string y otro number



///////ejemplo con JSON (objeto)

var x = {
    nombre: 'anibal'
}

var y = {
    nombre: 'anibal'
}

/// con el doble igual
console.log(x==y)
/// con el triple igual
console.log(x===y)


/// OBTENEMOS UN VALOR FALSE, SIEMPRE USAR EL === IGUAL PORQUE DE LO CONTRARIO COMPARANDO VALORES NUMERICOS
/// NO TENDRIA EN CUENTA EL TIPO DE DATO POR EJ UNO STRING Y UN NUMBER

y = x

console.log('cuando le colocamos y = x nos da lo siguiente')

/// con el doble igual
console.log(x==y)
/// con el triple igual
console.log(x===y)

/// cuando cremos un objeto nuevo asi sean iguales van a ser objetos distintos dentro de la memoria ram 
///ya que no esta en el mismo lugar, es igual pero en otro lugar, por ende false es el resultado


var sacha = {
    nombre: 'sacha'
}

var otroNombre = {
    nombre: 'sacha'
}

otroNombre = {
    nombre:'Mateo'
}

console.log(sacha)
console.log(otroNombre)


///// Y cuando reemplazamos....


otroNombre = sacha


console.log(sacha)
console.log(otroNombre)


/// RESULTADO SACHA SACHA, Como ocupan el mismo espacio entonces automaticamente el elemento es reemplazado.

// Con el operador == le pregunta a JS si los valores son iguales
// Con el operador === le pregunta a JS si los valores son identicos
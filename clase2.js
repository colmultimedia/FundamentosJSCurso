var nombre = 'Raimundi', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var longitudNombre = parseInt(nombre.length)
var ultLetraNombre = nombre.charAt(longitudNombre-1)

alert(ultLetraNombre)



function anibal(n,e){

      console.log(`Se llama ${n} y tiene ${e} años`)
}

anibal('mateo',26)

function diojenes({nombre}){

    console.log(nombre.toUpperCase())

}

//resultado llamando a la funcion:

diojenes({nombre:'pepito'})


/// otra forma

var marquitos = {
    nombre: 'Mateillo',
    apellido: 'Osito'
}

function miramar (danilo) {

    console.log(danilo.nombre.toUpperCase())
    console.log(danilo.apellido.toUpperCase())

}

miramar(marquitos)
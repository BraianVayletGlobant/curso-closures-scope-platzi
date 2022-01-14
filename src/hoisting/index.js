// Ejemplo1.
a = 2
var a 
console.log(a) // 👉return 2 

// Lo que sucede es que JS eleva nuestras declaraciones (guardandolas en memoria) dejando el codigo como:
var a = 'undefined'
a = 2
console.log(a)

// Ejemplo2.
console.log(b)
var b = 2 // 👉return undefined
// 👆 Esto sucede porque JS usa el hoisting en las declaraciones y no en las asignaciones.

// Ejemplo3.
function nameOfPet(name) {
  console.log(name)
}
nameOfPet('pim') // 👉return 'pim'

// Ejemplo4.
nameOfPet('pim') // 👉return 'pim'
function nameOfPet(name) {
  console.log(name)
}
// 👆 Lo que sucede es que JS eleva nuestras funciones (guardandolas en memoria) dejando el codigo como en el Ejemplo3
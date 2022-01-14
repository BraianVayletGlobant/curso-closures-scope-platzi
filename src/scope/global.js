// variables accesibles globalmente
var helloVar = 'helloVar'
let helloLet = 'helloLet'
const helloConst = 'helloConst'

// ⛔: 👉return: 'new helloVar' (pero es mala practica)
var helloVar = 'new helloVar'

// ❌: SyntaxError: Identifier 'helloLet' has already been declared.
let helloLet = 'new helloLet'

// ❌: SyntaxError: Identifier 'helloConst' has already been declared. 
const helloConst = 'new helloConst'

// Ejemplo1.
const aFunction = () => {
  // Podemos hacer esto gracias al scope global
  console.log(helloVar, helloLet, helloConst)
}

aFunction() // 👉return: 'helloVar', 'helloLet', 'helloConst'

// Ejemplo2.
const helloWorld = () => {  
  globalVar = 'globalVar' // No declaramos la variable
}

helloWorld()
// ⛔: 👉return 'globalVar', funciona pero es mala practica
console.log(globalVar)

// Ejemplo3.
const anotherFunction = () => {
  var localVar = globalVar = 'another value'
}

anotherFunction()
console.log(globalVar) // 👉return 'another value'
console.log(localVar) // ❌: ReferenceError: localVar is not defined
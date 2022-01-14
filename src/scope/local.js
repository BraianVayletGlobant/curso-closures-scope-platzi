// Ejemplo1.
const helloWorld = () => {
  const hello = 'hello world'
  console.log(hello)
}

helloWorld() // 👉return: 'hello world'
// console.log(hello) // ❌: ReferenceError: hello is not defined

// Ejemplo2.
var scope = 'soy global'
const functionScope = () => {
  // Ambito Lexico: anotherFunction tiene acceso a la var scope = 'soy local' y no a la global.
  var scope = 'soy local'
  const anotherFunction = () => {
    return scope
  }
  console.log(anotherFunction())
}

functionScope() // 👉return: 'soy local'
console.log(scope) // 👉return: 'soy global'
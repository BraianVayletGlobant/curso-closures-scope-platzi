// Ejemplo1.
const fruits = () => {
  var fruit = '🍎'
  console.log(fruit)
}

fruits()
console.log(fruit) // ❌: ReferenceError: fruit is not defined

// Ejemplo2.
const anotherFunction = () => {
  var x = 1
  var x = 2
  let y = 1
  let y = 2
  console.log(x) // 👉return 2 (evitar usar var y usar let)
  console.log(y) // ❌: SyntaxError: Identifier 'y' has already been declared
}

anotherFunction()
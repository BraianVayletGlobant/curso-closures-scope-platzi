// Ejemplo1.
const fruits = () => {
  if (true) {
    var fruit1 = '🍎'
    var fruit2 = '🍌'
    let fruit3 = '🥝'    
    console.log(fruit1, fruit2, fruit3) // 👉 return '🍎' '🍌' '🥝'
  }  
  console.log(fruit1, fruit2) // 👉 return '🍎' '🍌'
  // console.log(fruit1, fruit2, fruit3) // ❌: ReferenceError: fruit3 is not defined
}

fruits()

// Ejemplo2.
let x = 1 
{
  let x = 2 
  console.log(x) // 👉 return 2
}
console.log(x) // 👉 return 1

// Ejemplo3.
var y = 1 
{
  var y = 2 
  console.log(y) // 👉 return 2
}
console.log(y) // 👉 return 2 (cuidado!)

// Ejemplo4.
const anotherFunction = () => {
  // usando var
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
      // 👉 return
      // 10
      // 10
      // 10
      // 10
      // 10
      // 10
      // 10
      // 10
      // 10
      // 10
    }, 1000)
  }
  
  // usando let
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
      // 👉 return
      // 0
      // 1
      // 2
      // 3
      // 4
      // 5
      // 6
      // 7
      // 8
      // 9
    }, 1000)
  }
}

anotherFunction()
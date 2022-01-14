// Ejemplo1.
const anotherLoopFunction = () => {     
  // usando var
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
      // 👉return
      // 5
      // 5
      // 5
      // 5
      // 5
    }, 500)
  }
  
  // usando let
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
      // 👉return
      // 0
      // 1
      // 2
      // 3
      // 4
    }, 500)
  }
}

anotherLoopFunction()
// Ejemplo1.
const buildCount = i => {
  let count = i
  const displayCount = () => {
    console.log(count++)
  }
  return displayCount
}

const myCount = buildCount(1)
myCount() // 👉 return 1
myCount() // 👉 return 2
myCount() // 👉 return 3

const myOtherCount = buildCount(10)
myOtherCount() // 👉 return 10
myOtherCount() // 👉 return 11
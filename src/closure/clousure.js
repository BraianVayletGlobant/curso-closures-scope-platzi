// MoneyBox
// Ejemplo1.
const moneyBox = coins => {
  var saveCoins = 0
  saveCoins += coins
  console.log(`MoneyBox: $${saveCoins}`)
}

// No me esta almacenando el de saveCoins.
moneyBox(1) // 👉return 'MoneyBox: $1'
moneyBox(2) // 👉return 'MoneyBox: $2'

// Ejemplo2.
// Implemento clousure (estructura de una closure, combina una funcion con el ambito donde se declara)
const moneyBoxWithClosure = coins => {
  var saveCoins = 0
  const countCoins = coins => {
    saveCoins += coins    
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myMoneyBox = moneyBoxWithClosure()
myMoneyBox(4) // 👉return 'MoneyBox: $4'
myMoneyBox(6) // 👉return 'MoneyBox: $10'
myMoneyBox(10) // 👉return 'MoneyBox: $20'
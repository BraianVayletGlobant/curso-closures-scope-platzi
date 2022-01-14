// Ejemplo1.
const person = () => {
  let saveName = 'name' // queremos convertir a saveName en una variable privada.
  return {
    getName: () => saveName,
    setName: name => saveName = name
  }
}

const newPerson = person()
console.log(newPerson.getName()) // 👉return 'name'

newPerson.setName('newName')
console.log(newPerson.getName()) // 👉return 'newName'

console.log(saveName) // ❌: ReferenceError: saveName is not defined
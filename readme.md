# Curso de Closures y Scope en JavaScript

## Mis Cursos en Platzi 👉 [Certificados](https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL)

## Clases:

- Clase 1: Introduccion
- Clase 2: [Qué es el Scope y cómo funciona el Global Scope](#Qué-es-el-Scope-y-cómo-funciona-el-Global-Scope)
- Clase 3: [Local Scope](#Local-Scope)
- Clase 4: [Function Scope](#Function-Scope)
- Clase 5: [Block Scope](#Block-Scope)
- Clase 6: [Ámbito léxico en closures](#Ámbito-léxico-en-closures)
- Clase 7: [¿Qué es un closure?](¿Qué-es-un-closure?)
- Clase 8: [Cómo crear variables privadas con closures](#Cómo-crear-variables-privadas-con-closures)
- Clase 9: [Loops](#Loops)
- Clase 10: [¿Qué es el hoisting?](#¿Qué-es-el-hoisting?)
- Clase 11: [Debugging](#Debugging)

# Qué es el Scope y cómo funciona el Global Scope

### Scope

Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable. En otras palabras determina la accesibilidad (visibilidad) de las variables.

En JavaScript hay dos tipos de alcance:

- Alcance local
- Alcance global

JavaScript tiene un alcance de función: cada función crea un nuevo alcance.
El alcance determina la accesibilidad (visibilidad) de estas variables.

Las variables definidas dentro de una función no son accesibles (visibles) desde fuera de la función.

### Global Scope

No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con var podemos re-asignar una variable pero es una mala práctica.
- Con let y const no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
- Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.

Al declarar la variable con var podemos declarar nuevamente la variable.

```javascript
// Esto no causa error
var hVar = "hVar";
var hVar = "hVar...";
```

No así cuando se utiliza let o const.

```javascript
// Esto genera un SyntaxError debido a que la variable hlet se intenta declarar por segunda vez.
let hlet = "hlet";
let hlet = "hlet...";
```

Pero si podemos asignar un nuevo valor

```javascript
let hlet = "hlet";
hlet = "hlet_update";
```

Con const no podemos declarar la variable nuevamente y tampoco podemos asignar valor por segunda vez

```javascript
// error
const hconst = 'hlet'
const hconst = 'hlet'
---
// error
const hconst = 'hlet'
hconst = 'hlet'
```

## Ejemplo Clase:

```javascript
// variables accesibles globalmente
var helloVar = "helloVar";
let helloLet = "helloLet";
const helloConst = "helloConst";

// ⛔: 👉return: 'new helloVar' (pero es mala practica)
var helloVar = "new helloVar";

// ❌: SyntaxError: Identifier 'helloLet' has already been declared.
let helloLet = "new helloLet";

// ❌: SyntaxError: Identifier 'helloConst' has already been declared.
const helloConst = "new helloConst";

// Ejemplo1.
const aFunction = () => {
  // Podemos hacer esto gracias al scope global
  console.log(helloVar, helloLet, helloConst);
};

aFunction(); // 👉return: 'helloVar', 'helloLet', 'helloConst'

// Ejemplo2.
const helloWorld = () => {
  globalVar = "globalVar"; // No declaramos la variable
};

helloWorld();
// ⛔: 👉return 'globalVar', funciona pero es mala practica
console.log(globalVar);

// Ejemplo3.
const anotherFunction = () => {
  var localVar = (globalVar = "another value");
};

anotherFunction();
console.log(globalVar); // 👉return 'another value'
console.log(localVar); // ❌: ReferenceError: localVar is not defined
```

# Local Scope

**Lexical Scope / Ámbito Léxico:** El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

Entonces, el scope se puede definir como el alcance que puede tener una variable en tu codigo.

- El **Local Scope** se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

- El **ambito lexico** se refiere a que una funcion puede acceder a una funcion o variable fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const helloWorld = () => {
  const hello = "hello world";
  console.log(hello);
};

helloWorld(); // 👉return: 'hello world'
// console.log(hello) // ❌: ReferenceError: hello is not defined

// Ejemplo2.
var scope = "soy global";
const functionScope = () => {
  // Ambito Lexico: anotherFunction tiene acceso a la var scope = 'soy local' y no a la global.
  var scope = "soy local";
  const anotherFunction = () => {
    return scope;
  };
  console.log(anotherFunction());
};

functionScope(); // 👉return: 'soy local'
console.log(scope); // 👉return: 'soy global'
```

# Function Scope

Un pequeño resumen sobre como actúan las diferentes variables:

- Las variables escritas con la palabra clave **var** _pueden ser redeclaradas_, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

- Las variables escritas con la palabra clave **let** _no pueden ser redeclaradas_, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado:

```javascript
let fruit = "apple";
fruit = "banana";
console.log(fruit); // banana
```

- Las variables escritas con la palabra clave **const** _no pueden ser redeclaradas o reasignadas_, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const fruits = () => {
  var fruit = "🍎";
  console.log(fruit);
};

fruits();
console.log(fruit); // ❌: ReferenceError: fruit is not defined

// Ejemplo2.
const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2;
  console.log(x); // 👉return 2 (evitar usar var y usar let)
  console.log(y); // ❌: SyntaxError: Identifier 'y' has already been declared
};

anotherFunction();
```

# Block Scope

Dentro de una función podemos tener un bloque de código, por ejemplo: un if, mientras lo llamamos sobre una llave estará guardado dentro de un bloque.

Si definimos un elemento con var podemos acceder en todos los elementos de la función, si lo llamamos fuera del bloque donde está, vamos a poder acceder a ese elemento.

Con let y const no vamos a poder acceder a ellos porque se establecen dentro del bloque, solo se puede acceder a ellos dentro de ese bloque.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const fruits = () => {
  if (true) {
    var fruit1 = "🍎";
    var fruit2 = "🍌";
    let fruit3 = "🥝";
    console.log(fruit1, fruit2, fruit3); // 👉 return '🍎' '🍌' '🥝'
  }
  console.log(fruit1, fruit2); // 👉 return '🍎' '🍌'
  // console.log(fruit1, fruit2, fruit3) // ❌: ReferenceError: fruit3 is not defined
};

fruits();

// Ejemplo2.
let x = 1;
{
  let x = 2;
  console.log(x); // 👉 return 2
}
console.log(x); // 👉 return 1

// Ejemplo3.
var y = 1;
{
  var y = 2;
  console.log(y); // 👉 return 2
}
console.log(y); // 👉 return 2 (cuidado!)

// Ejemplo4.
const anotherFunction = () => {
  // usando var
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
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
    }, 1000);
  }

  // usando let
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
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
    }, 1000);
  }
};

anotherFunction();
```

# Ámbito léxico en closures

El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento.

Esto significa que podemos acceder al valor “count” dentro de la función porque es el alcance donde está asignado.

Podemos tener varias formas de manejar la constante “buildCount”, significa que la podemos asignar a myCount y myOtherCount. Trabajaremos con el scope(alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount(); // 👉 return 1
myCount(); // 👉 return 2
myCount(); // 👉 return 3

const myOtherCount = buildCount(10);
myOtherCount(); // 👉 return 10
myOtherCount(); // 👉 return 11
```

# ¿Qué es un closure?

Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito en el que se creó. La mejor forma de entender un closure es por medio de un ejemplo práctico.

### Ejemplo de closure

Cuando declaramos una función dentro de nuestro global scope, estamos usando un closure.

```javascript
var myVar = "hi";
function myFunction() {
  console.log(myVar);
}
myFuntion(); // hi
```

Los closures son basicamente cuando aprovechamos la habilidad de Javascript de usar las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grandote; el bloque myFunction puede usar TODAS las variables que están disponibles en el bloque inmediato anterior.

Usando el ejemplo del profesor:
Si tu declaras la variable saveCoins en el global scope, estarías usando el mismo principio que si usas la segunda función que escribe el profesor porque estás usando las variables que están en el scope padre.

```javascript
var saveCoins = 0;
const moneyBox = (coins) => {
  saveCoins += coins;
  console.log(saveCoins);
};
moneyBox(5); //5
moneyBox(10); //15
```

Pero está mal visto modificar variables globales, por eso es que quieres crear variables dentro de un scope cerrado y que interactuen entre ellas, entonces declaras las variables que vas a usar dentro del scope padre del bloque que las va a modificar para que siempre pueda acceder a ellas. Para eso creas un nuevo “global scope” ficticio que va a conservar todas las variables que tú quieras monitorear:

Ahora mira las similitudes entre el codigo de arriba y el que está justo abajo de aquí…

```javascript
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(6);
```

Si remueves " const moneyBox = () => {} " serían exactamente las mismas lineas de código!

```javascript
//const moneyBox = () => {
var saveCoins = 0;
const countCoins = (coins) => {
  saveCoins += coins;
  console.log(saveCoins);
};
// return countCoins;
//}
```

Lo que estás haciendo es simplemente bajar un nivel tu scope. Quieres que la funcion moneyBox regrese una funcion que estuvo declarada dentro de sí misma porque esa función tiene acceso a ese Scope que ya no va a existir para que alguien más lo use, solamente lo podrá usar la función countCoins. Al guardar el resultado de moneyBox (countCoins) en otra variable estás creando el ámbito léxico que menciona el profesor, necesario para no dejar morir ese scope.

Tal vez no sea la mejor explicación que encuentres, pero así lo entendí yo y de verdad me esforcé en intentar explicarlo bien. Por favor déjame saber si te ayudó y también dime si algo es ambiguo o no está claro, lo apreciaría mucho. c:.

> _Aporte creado por Héctor Eduardo López Carballo_

## Ejemplo Clase:

```javascript
// MoneyBox
// Ejemplo1.
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

// No me esta almacenando el de saveCoins.
moneyBox(1); // 👉return 'MoneyBox: $1'
moneyBox(2); // 👉return 'MoneyBox: $2'

// Ejemplo2.
// Implemento clousure (estructura de una closure, combina una funcion con el ambito donde se declara)
const moneyBoxWithClosure = (coins) => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBoxWithClosure();
myMoneyBox(4); // 👉return 'MoneyBox: $4'
myMoneyBox(6); // 👉return 'MoneyBox: $10'
myMoneyBox(10); // 👉return 'MoneyBox: $20'
```

# Cómo crear variables privadas con closures

**Variables privadas con Closures:** JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const person = () => {
  let saveName = "name"; // queremos convertir a saveName en una variable privada.
  return {
    getName: () => saveName,
    setName: (name) => (saveName = name),
  };
};

const newPerson = person();
console.log(newPerson.getName()); // 👉return 'name'

newPerson.setName("newName");
console.log(newPerson.getName()); // 👉return 'newName'

console.log(saveName); // ❌: ReferenceError: saveName is not defined
```

# Loops

Podemos crear Closures de diferentes formas y también de forma involuntaria, esto significa que no tenemos control de lo que estamos creando, tenemos que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera nosotros no controlemos muchas veces sucede porque no establecimos nuestros elementos correctamente.

Con el uso del Scope y los Closures podemos optimizar nuestros proyectos sin ningún problema.

## Ejemplo Clase:

```javascript
// Ejemplo1.
const anotherLoopFunction = () => {
  // usando var
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
      // 👉return
      // 5
      // 5
      // 5
      // 5
      // 5
    }, 500);
  }

  // usando let
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
      // 👉return
      // 0
      // 1
      // 2
      // 3
      // 4
    }, 500);
  }
};

anotherLoopFunction();
```

# ¿Qué es el hoisting?

Hoisting: Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador.

De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido declarado dentro de esta estructura.

El termino ‘levantamiento’ es mas a fines didácticos y está bien, pero no es tan así, no es que FISICAMENTE levanta las declaraciones y las pone al principio como muchos explican. Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración (todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, JS va a asignarle referencias a cada una.
Si es:

- **var:** Asigna la referencia undefined (si de acá viene el famoso undefined)
- **let/const:** Asigna la referencia uninitialized(declarado pero no inicializado)
- **función:** Guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)

## Ejemplo Clase:

```javascript
// Ejemplo1.
a = 2;
var a;
console.log(a); // 👉return 2

// Lo que sucede es que JS eleva nuestras declaraciones (guardandolas en memoria) dejando el codigo como:
var a = "undefined";
a = 2;
console.log(a);

// Ejemplo2.
console.log(b);
var b = 2; // 👉return undefined
// 👆 Esto sucede porque JS usa el hoisting en las declaraciones y no en las asignaciones.

// Ejemplo3.
function nameOfPet(name) {
  console.log(name);
}
nameOfPet("pim"); // 👉return 'pim'

// Ejemplo4.
nameOfPet("pim"); // 👉return 'pim'
function nameOfPet(name) {
  console.log(name);
}
// 👆 Lo que sucede es que JS eleva nuestras funciones (guardandolas en memoria) dejando el codigo como en el Ejemplo3
```

# Debugging

Explicando las DevTools del navegador y el uso de la sentencia debugger...

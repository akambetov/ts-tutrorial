function printPoint (point: {x: string, y: string} ): void { // *
  console.log('point is:', point)
}

const point1 = {x: '1', y:'2'}
// в point2 есть лишнее свойсто Z!
// но компилятор не ругается, потому что есть обязательные поля, корорые деклалрированы в параметрах функции
// строка *
// декларация параметров функции это некоторая маска, и при этом обязательные поля должны быть переданы
const point2 = {x: '1', y:'2', z: '3'}

printPoint(point1)
printPoint(point2)

function printName(user: {firstName: string, lastName?: string}): void {
  console.log('hello', user.firstName.toUpperCase())

  if(user.lastName) {
    console.log('hello', user.lastName.toUpperCase())
  }
}
printName({firstName: 'Almat'})
printName({firstName: 'Almat', lastName: 'Kambetov'})

export {}
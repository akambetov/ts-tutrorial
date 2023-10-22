type TStatus = 'ok' | 'loading' | 'error'

const statusX: TStatus = 'loading'

function printId (id: number | string): void {
  if (typeof id === 'string') console.log(typeof id, id.toUpperCase())
  else console.log(typeof id, id)
}
printId(1)
printId('2')

function welcome (person: [string, string] | string):void {
  if(Array.isArray(person)) console.log('Array: Hello', person.join(' '))
  else console.log('String: Hello', person)
}

welcome(['Almat', 'Kambetov'])
welcome('Dulat Kambetov')
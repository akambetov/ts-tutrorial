function formatPair(pair: [string, string]) {
  const [key, value] = pair
  
  return {
    [key]: value
  }
}


// const myPair = ['myKey', 'myValue']
// Ошибка "Argument of type 'string[]' is not assignable to parameter of type '[string, string]'.\n  Target requires 2 element(s) but source may have fewer.",
// formatPair(myPair)
// Возможное решение через утверждение, !!! но тип параметра может быть сложным и поэтому не всегда можно так делать
// formatPair(myPair as [string, string])

// infer - дает узнать типы параметов функции
type FirstArgType<T> = T extends (first: infer First, ...args: any[]) => any ? First : never
const myPair: FirstArgType<typeof formatPair> = ['myKey', 'myValue']
const formattedPair = formatPair(myPair)
console.log('formattedPair', formattedPair)

// Пример с классами
type ConstructorFirsArg<T> = T extends {new(arg: infer A, args: any[]): any } ? A :never

class Computer {
  constructor(brand: string) {}
}
let brand: ConstructorFirsArg<typeof Computer>
let date: ConstructorFirsArg<typeof Date>

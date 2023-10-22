// Оператор ! => someVar!.someProp
let word: string | null = null
const num = 10

if(num > 5) {
  word = 'abc'
}

console.log(word!.toUpperCase()) // Я на 100 процентов уверен, что в этот момент в word лежит строка, а не null

function printName (name?: string) {
  const fullName: string = name! // Я на 100 процентов уверен, что в этот момент в name лежит строка, а не undefined
}

interface IPerson {
  name: string, 
  age: number,
  sex: 'male' | 'female'
}

function printName2(person?: IPerson): void {
  const fullName = person!.name // Я на 100 процентов уверен, что в этот момент в person лежит объект соответсвующий IPerson, а не undefined
}

const people: IPerson[] = [
  {
    name: 'Almat',
    age: 33,
    sex: 'male'
  },
  {
    name: 'Alina',
    age: 23,
    sex: 'female'
  },
  {
    name: 'Sveta',
    age: 34,
    sex: 'female'
  },
  {
    name: 'Dulat',
    age: 33,
    sex: "male"
  }
]

const femalePerson = people.find(person => person.sex === 'female')! // Я на 100 процентов уверен, что в этот момент в femalePerson лежит объект соответсвующий IPerson, а не undefined

console.log({femalePerson})

export {}
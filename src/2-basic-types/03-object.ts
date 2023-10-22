interface ICar {
  wheel: number
  brand: string
  type: string
  isNew?: boolean
  name?: string

  // дает вохмложность добавлеять свойства, не уазанные в интерфейсе - Динамические свойства
  [key: string]: unknown
}

const car:ICar = {
  wheel: 4,
  brand: 'bmw',
  type: 'sedan',
  isNew: true,
  name: 'X5'
}

// свойства, которых нет в интерфейсе
car.withoutInterface = true
// есть соглашение декларировать свойства, которых нет в интерфейсе через квадратные скобки []
car['withoutInterface2'] = true

console.log(car)
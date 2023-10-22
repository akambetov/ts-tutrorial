function len<T extends { length: number}> (value: T): number {
  console.log(value.length)
  return value.length
}

len('abc')
len([1,2])
len({a: 1, length: 1})
// Будет ошибка, потому что нет свойства length
// len(1)
// len(true)
// len({a: 1})
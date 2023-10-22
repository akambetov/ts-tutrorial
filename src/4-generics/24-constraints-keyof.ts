function prop<T, U extends keyof T> (key: U, obj: T): T[U] {
  return obj[key]
}

// interface Laptop {
//   brand: string
// }
// type F = Laptop['brand']

const obj1 = { a:1, b:2, c:3, d: 4 }

const a = prop('c', obj1)
const d = prop('d', obj1)
// Ошибка, свойства "e" нет в obj1
// const e = prop('e', obj1)
console.log({a, d});

export {}
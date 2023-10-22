// Union primitives
type TUnion1 = 'a' | 'b' | 'c' | 'd' | 1
type TUnion2 = 'a' | 'e' | 'c' | 'f' | 1
type TUnionAll = TUnion1 | TUnion2
type TUnionShared = TUnion1 & TUnion2 // ТУТ пересечение

const all: TUnionAll = 'b'
const shared: TUnionShared = 'a'

// Union objects
type TUnionObject1 = {a: string, b: string, c: number}
type TUnionObject2 = {a: string, d: string, e: number}
type TUnionObkectsOr = TUnionObject1 | TUnionObject2
type TUnionObkectsAnd = TUnionObject1 & TUnionObject2 // ТУТ склеивание
const or: TUnionObkectsOr = {a: 'a', b: 'b', c: 1, d: 'd', e:2}
const and: TUnionObkectsAnd = {a: 'a', b: 'b', c: 1, d: 'd', e:2}
// ______________________________________________________________
type TUser = {
  readonly email: string,
  readonly login: string,
  password: string
}

type TPerson = {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number
}

type TEmployee = TUser & TPerson & {
  contractStarts: Date
}

type TDeveloper = TEmployee & {
  phone: string,
  skills: string[],
  level?: 'junior' | 'middle' | 'senior',
  say(): void,
  code?: (langage: string) => void
}

const employeeT: TDeveloper = {
  email: 'a@gmail.com',
  login: 'alma',
  password: '123',
  firstName: 'Almat',
  lastName: 'Kambetov',
  contractStarts: new Date(),
  skills: ['React', 'Vue', 'TS', 'JS', 'Webpack', 'HTML', 'CSS'],
  level: 'middle',
  phone: '87078097902',
  say() {console.log('say')},
  code(langage) {console.log('code', langage)}
}

employeeT.say()
employeeT.code && employeeT.code('TS')

export {}
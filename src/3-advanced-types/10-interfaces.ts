interface IUser {
  readonly email: string,
  readonly login: string,
  password: string
}

interface IPerson {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number
}

interface IEmployee extends IUser, IPerson {
  contractStarts: Date
}

interface IDeveloper extends IEmployee {
  phone: string,
  skills: string[],
  level?: 'junior' | 'middle' | 'senior',
  say(): void,
  code?: (langage: string) => void
}

const employee: IDeveloper = {
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

employee.say()
employee.code && employee.code('TS')

export {}
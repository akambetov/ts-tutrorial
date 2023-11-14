import { average } from "../2-basic-types/02-function"

let strLet = 'Hello'
type StrLet = typeof strLet // type string

const strConst = 'hello'
type StrConst = typeof strConst // type hello

// создаем свою функцию, но нам нужно чтобы сигнатура функции была
// такой же как у уже существующей функции (импортируем из другой либы и тд)
type MyNewFnType = typeof average
// при обявлении функции можно не обявлять типов параметров и возвращаемого значения
// так как это уже сделано при const max: MyNewFnType
const max: MyNewFnType = (...numbers) => Math.max(...numbers)
const maxN = max(7,1,9,2,3)
console.log(maxN)

// если нам не нужна ВСЯ сигнатура сущействующей ф-ий,
// а только тип возвращаемого значения,
// то для этого есть встроенная утилита ReturnType
type RetrunTypeAveregeFn = ReturnType<typeof average>

export {}
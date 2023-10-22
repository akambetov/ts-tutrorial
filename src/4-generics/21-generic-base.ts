type TypeFactory<T> = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

function toArray<A>(...args: A[]): A[] {
  return args
}

toArray<number>(1,2,3)
toArray('a','b','c')

function head(value: string): string
function head(value: readonly []): undefined
function head<T>(value: readonly T[]): T
function head(value: any): any {
  return value[0]
}
head(['a', 'b', 'c'])
head([1,2,3])
head('str')

const headArrow = <T>(value: T[]): T => value[0] 

headArrow(['a', 'b', 'c'])
headArrow([1,2,3])

interface ModelData<T> {
  title: string,
  value: T // or number, or [], or bolean, etc.
}

const object: ModelData<number> = {
  title: 'title',
  value: 1
}
const object2: ModelData<Array<number>> = {
  title: 'title',
  value: [1]
}
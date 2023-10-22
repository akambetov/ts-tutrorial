// Перегрузка функций
function add (a: number, b: number): number
function add (a: string, b: string): string
function add (a: string, b: number): string
function add (a: number, b: string): string
function add (a: any, b: any): any {
  return a + b
}

const numNum = add(1, 2)
const strStr = add('3', '4')
const strNum = add('5', 6)
const numStr = add(7, '8')

console.log({numNum, strStr, strNum, numStr});

//------------------------------------------------------------ 

type AsyncCb = (res: number) => number

function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: AsyncCb): number
function asyncSum(a: number, b: number, cb?: AsyncCb): any {
  const result = a + b
  
  if(cb) {
    return cb(result)
  }

  return Promise.resolve(result)
}

const withoutCb = asyncSum(1, 2)
const withCb = asyncSum(1, 2, (res) => res)

console.log({withoutCb, withCb})
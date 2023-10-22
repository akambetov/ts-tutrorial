const numbers = [1,2,3,4]

const strs: string[] = []
const strs2: Array<string> = []

interface ICar2 {
  wheel: number
  brand: string
}

const cars: ICar2[] = []
cars.push({wheel: 4, brand: 'bmw'})

const arrOfArr: string[][] = []
arrOfArr.push([''])

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index)
  })
}
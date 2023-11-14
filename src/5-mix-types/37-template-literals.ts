export {}

type TSide = 'top' | 'right' | 'bottom' | 'left'
type TMatgin = `margin${'' | Capitalize<TSide> }`
type TPadding = `padding${'' | Capitalize<TSide> }`

type TDirection = 'down' | 'left' | 'right' | 'up'
type TPosition = "top" | "bottom"
type TEntry = 'in' | 'out'

// Набор допустимых классов для  fade
type FadeClassNames = `fade${Capitalize<TEntry>}${Capitalize<'' | TDirection | TPosition>}`

interface Car {
  brand: string
  model: string
  year: number
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}
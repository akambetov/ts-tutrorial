type WindowProp = keyof Window

// Допустимые значения для myValue ключи глобального объекта Window
const myValue: WindowProp = "alert"

interface PC {
  brand: string,
  year: string
}

type Type1  = keyof PC // union с двумя знаяениями: "brand" | "year"

const t: Type1 = "brand"

type Tuple1 = keyof[string, number]

const tuple1: Tuple1 = "0"

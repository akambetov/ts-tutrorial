type TMyBool = false | true

type TPair = [string, string]
type TPairs = TPair[]

type TCar = {
  wheel: number
  brand: string
  type: string
  isNew?: boolean
  name?: string

  // дает вохмложность добавлеять свойства, не уазанные в интерфейсе
  [key: string]: unknown
}

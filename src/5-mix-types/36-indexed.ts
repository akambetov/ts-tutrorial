export {}

interface DataModel {
  id: string,
  title: string,
  elements: {
    header: {
      title: string,
      description: string,
      links: string[]
    },
    footer: {
      description: string,
      links: string[]
    },
    body: {
      title: string,
      conntent: {}
    }
  }
}

type TElement = DataModel['elements']
type TElementFooter = DataModel['elements']['footer']
type TElementHeader = TElement['header']

type someTuple = [number, string, boolean, ...string[]]

const arr: someTuple = [1, '1', true, 'a', 'b']
type TFromSomeTuple = someTuple[0]

// Хак
const sizes = ['small','medium', 'large'] as const

type TypoefSizes = typeof sizes[number] // магическим образом получили union -__-
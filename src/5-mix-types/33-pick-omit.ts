export {}

type WellKnownBrands = 'apple' | 'lenovo' | 'msi' | 'asus'

type Names = Record<string, number>
type BrandNames = Record<WellKnownBrands, number>

const myBrands: BrandNames = {apple: 1, lenovo: 2, msi: 3, asus: 4}

interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: number
}

// pick
type SimplePickTodo = Pick<Todo, 'id' | 'title' | 'completed'>
const simplePickedTodo: SimplePickTodo = {
  id:'1',
  title:'2',
  completed:true
}

// omit
type SimpleOmitTodo = Omit<Todo, 'description'>
const simpleOmitedTodo: SimpleOmitTodo = {
  id:'1',
  title:'2',
  completed:true,
  createdAt: 3
}
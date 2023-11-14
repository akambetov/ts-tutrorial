export {}

interface Todo {
  readid: string
  title: string
  description?: string
  completed?: boolean
  createdAt?: number
}

// все поля стали только readonly
type ReadonlyTodo = Readonly<Todo>

// все поля стали опциональными
type PartialTodo = Partial<Todo>

function updateTodo(todo: Todo, fieldsToIpdate: PartialTodo) {
  return {...todo, ...fieldsToIpdate}
}

// все поля стали required
type RequiredTodo = Required<Todo> 
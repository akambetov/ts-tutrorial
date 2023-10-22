interface DefaultObject {
  [key: string]: unknown 
}

export async function request<T = DefaultObject>(url: string): Promise<T> {
  const response = await fetch(url)

  return response.json()
}

interface Todo {
  id: number,
  completed: boolean,
  title: string
}

const data = request<Todo[]>('')
import React from 'react'

interface ITodoItemProps {
  id: string
  title: string
  completed: boolean
  children?: React.ReactNode // нужно явно узказывать тип children, если в компонент будет передаваться children
}

const TodoItem = ({ id, title, completed, children}: ITodoItemProps) => {
  return <li>
    <input type="checkbox" checked={completed}/>
    <span>{title} - id {id}</span>
    <span>&times;</span>
    {children}
  </li>
}


export default TodoItem
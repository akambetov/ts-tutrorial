import React from 'react'

interface ITodoItemProps {
  id: string
  title: string
  completed: boolean
  children?: React.ReactNode // нужно явно узказывать тип children, если в компонент будет передаваться children
  style?: React.CSSProperties
}

const TodoItem = ({ id, title, completed, children, style = {} }: ITodoItemProps) => {
  return <li style={{color: 'red', backgroundColor: 'green', ...style}}>
    <input type="checkbox" checked={completed}/>
    <span>{title} - id {id}</span>
    <span>&times;</span>
    {children}
  </li>
}


export default TodoItem
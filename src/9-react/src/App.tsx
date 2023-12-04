import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

type ITodo = {
  id: string,
  title: string,
  completed: string
}

function App() {
  const [text, setText] = useState('')
  // !!! при работе с массивами при укзании пустого массива в качестве inital, 
  // то тип для стейта будуте массив never -  never[] 
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState<string[]>([])
  // !!! если надо засетить initial в качестве null
  // то в дженерике указываем union из типа который нужен и null
  //  в коде нужна будет проверка на null
  // const [someS, setSomeS] = useState<string[] | null>(null)
  // const [todo, setTodo] = useState<ITodo | null>(null)

  return (
    <div className="App">
      <TodoItem id='1' title='Title 1' completed={false} style={{color: 'yellow'}}/>
      <TodoItem id='2' title='Title 2' completed={true}/>
    </div>
  );
}

export default App;

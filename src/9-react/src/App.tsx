import { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import { ITodo } from './types';

function App() {
  const [text, setText] = useState('');
  // !!! при работе с массивами при укзании пустого массива в качестве inital,
  // то тип для стейта будуте массив never -  never[]
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState<ITodo[]>([]);
  // !!! если надо засетить initial в качестве null
  // то в дженерике указываем union из типа который нужен и null
  //  в коде нужна будет проверка на null
  // const [someS, setSomeS] = useState<string[] | null>(null)
  // const [todo, setTodo] = useState<ITodo | null>(null)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const addTodo = () => {
    const newTodo: ITodo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setText('');
  };

  const addTodoRef = (inputValue: string) => {
    const newTodo: ITodo = {
      id: new Date().toString(),
      title: inputValue,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  // Будет ошибка при написании fetch в одну стороку в одну стору,
  // так как стрелочная функция возвращает в данном случае некий Promise<Response>
  // а useEffect ждет либо void, либо callback для отчитки
  // useEffect(() => fetch('https://jsonplaceholder.typicode.com/todos'));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data: ITodo[]) => setTodos(data));
  }, []);

  console.log(todos);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleClick={addTodo}
        handleClickRef={addTodoRef}
      />
      <TodoItem
        id="1"
        title="Title 1"
        completed={false}
        style={{ color: 'yellow' }}
      />
      <TodoItem id="2" title="Title 2" completed={true} />
    </div>
  );
}

export default App;

import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <TodoItem id='1' title='Title 1' completed={false} style={{color: 'yellow'}}/>
      <TodoItem id='2' title='Title 2' completed={true}/>
    </div>
  );
}

export default App;

import './App.css';

const lista = ['Tarefa', 'Tarefada', 'Tarefazada'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>{lista.map(Task)}</ol>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header.js'
import Card from './components/Card.js';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {pokemons.map((pokemon) => <Card pokemon={pokemon}/>)}
    </div>
  );
}

export default App;

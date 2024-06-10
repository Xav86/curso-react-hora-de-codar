import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  const name = "Gustavo"

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Meu nome é: {newName}</p>
      <p>Soma: {sum(2, 3)}</p>
      <Frase />
      <img src={url} alt="Imagem de 105px por 150px"/>
      <HelloWorld />
    </div>
  );
}

export default App;

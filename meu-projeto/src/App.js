import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Artur";

  return (
    <div className="App">
      <HelloWorld />
      <h1>Testando CSS</h1>
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Calebe" />
      <SayMyName nome="Caetano" />
      <SayMyName nome={nome} />
      <Pessoa nome="Gustavo" idade="19" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;

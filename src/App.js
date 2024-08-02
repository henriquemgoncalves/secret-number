import './App.css';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/conteudo';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>      
    </div>
  );
}

export default App;

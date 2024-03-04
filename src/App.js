import Ejemplo from './components/Ejemplo';
import './App.css';

function App() {
  console.log('App renderizado');
  return (
    <div className="App">
      <header className="App-header">
        
          <Ejemplo /> {/* Usa el componente NombreAleatorios aquí */}
        
      </header>
    </div>
  );
}

export default App;

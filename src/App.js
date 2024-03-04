import Ejemplo from './components/Ejemplo';
import './App.css';
import TaskList from './components/lists/TaskList';
import Settings from './components/settings/Settings';

function App() {
  console.log('App renderizado');
  return (
    <div className="App">
      <header className="App-header">
        
          <Ejemplo /> {/* Usa el componente NombreAleatorios aquí */}
          
      </header>
      <TaskList />
      <Settings />
    </div>
  );
}

export default App;

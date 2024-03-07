import Ejemplo from './components/Ejemplo';
import './App.css';
import TaskList from './components/lists/TaskList';
import Updater from './components/sw/Updater'
//import Settings from './components/settings/Settings';

function App() {
  console.log('App renderizado');
  return (
    <div className="App">
      <header className="App-header">
        
        <Ejemplo /> {/* Usa el componente NombreAleatorios aquí */}
        <TaskList />
        <Updater />
        
      </header>
      
    </div>
  );
}

export default App;


import './App.css';
import Productos from '../views/Productos'
import Navbar from './components/NavBar/Navbar';

function App() {
  const nombre_items = ['home','link','disabled']
  return (
    <div className="App text-danger">
      <Navbar  nombre_items= {nombre_items} nombre_logo= {'Tus Bebidas'} />
    </div>
  );
}

export default App;

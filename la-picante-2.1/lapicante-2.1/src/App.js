import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"

function App() {
  return (
    <div className="App">
      <div className='contenedor-header'>
        <Navbar/>
        <div className='separador'></div>
        <Contenedor1 />
        </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"
import Eventos from "./components/events"
import Contador from "./components/contador"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Contenedor1 />
        <div className='contenedor-2'>
          <Eventos/>
        <Contador
          segundos = "281400"
          initialSeconds={280020}
        />
        </div>

    </div>
  );
}

export default App;

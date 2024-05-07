import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Contenedor1 />
        <Titulos />
        <Contador segundos = "281400" initialSeconds={280020}/>
    </div>
  );
}

export default App;

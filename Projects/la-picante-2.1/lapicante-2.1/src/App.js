import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Countdown from './components/countdown';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Contenedor1 />
        <div className='contenedor-2'>
          <Eventos
            fecha = "VIERNES 3 de MAYO"
            entrada = "Free Hasta 2 AM"
            direccion = "Entre rios 1719"
            ads = "ZEVEN CLUB"
          />
        <Countdown
          segundos = "283301"
        />
        </div>

    </div>
  );
}

export default App;

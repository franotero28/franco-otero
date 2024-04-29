import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"
import Eventos from "./components/events"


function App() {
  return (
    <div className="App">
      <div className='contenedor-header'>
        <Navbar/>
        <div className='separador'>
          <img className='img-logo' src={require('./img/logopicante.png')}/>
        </div>
        <Contenedor1 />
      </div>
      <div className='contenedor-2'>
        <Eventos
          fecha = "VIERNES 3 de MAYO"
          entrada = "Free Hasta 2 AM"
          direccion = "Entre rios 1719"
        />
      </div>


    </div>
  );
}

export default App;

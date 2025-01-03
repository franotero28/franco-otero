import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/logoPicante"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';
import Footer from './components/footer';

function App() {

  const dateTime = new Date('2025-01-11 00:00').getTime();
  const timestamp = Math.floor(dateTime / 1000);
  const ahora = Date.now();
  const timeAhora = Math.floor(ahora / 1000);

  const segundos1 = timestamp - timeAhora

  return (
    <div className="App">
        <Navbar/>
        <Contenedor1 />
        <Titulos />
        <Contador segundos1={segundos1}/>
        <div className='contenedor-eventos'>

          <Eventos 
          titulo= "LA PICANTE x BEBOTEO"
          img= "flyerhenry.jpg"
          fecha= "11-01 00:00"
          direccion= "Ruta Nacional n°6 km 26 - Obras sanitarias"
          entrada= " Consultar"
          dj="DJ Killah"
          button= "Comprar Entradas"
          finalizado={false}
          />

        </div>
        <Footer />
    </div>
  );
}

export default App;

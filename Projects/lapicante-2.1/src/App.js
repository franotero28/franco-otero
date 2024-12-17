import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/logoPicante"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';
import Footer from './components/footer';

function App() {

  const dateTime = new Date('2024-12-21 00:00').getTime();
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
          titulo= "LA PICANTE x LA BEBOTEO"
          img= "flyerhenry.jpg"
          fecha= "21-12 00:00"
          direccion= "El coyunco RN226 KM 16 - Obras Sanitarias"
          entrada= " Consultar"
          dj="DJ Killah, Dj Tony"
          button= "Comprar Entradas"
          finalizado={false}
          />

        </div>
        <Footer />
    </div>
  );
}

export default App;

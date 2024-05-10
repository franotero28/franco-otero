import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/logoPicante"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';
import Footer from './components/footer';

function App() {

  const dateTime = new Date('2024-05-18 00:00').getTime();
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
          titulo= "LA PICANTE en ZEVEN CLUB"
          img= "bgc-lapicante.jpeg"
          fecha= "03-05 00:00"
          direccion= "Entre rios 1719 - Zeven Club"
          entrada= "2500"
          dj="DJ MacaDiaz"
          button= "Comprar Entradas"
          finalizado={true}
          />

          <Eventos 
          titulo= "LA PICANTE en BATÁN"
          img= "bgc-lapicante.jpeg"
          fecha= "18-05 00:00"
          direccion= "Batan - Momentos bailables"
          entrada= "2200"
          dj="DJ TucaLesca"
          button= "Comprar Entradas"
          finalizado={false}
          />

        </div>
        <Footer />
    </div>
  );
}

export default App;

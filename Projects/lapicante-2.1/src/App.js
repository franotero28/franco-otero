import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/logoPicante"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';
import Footer from './components/footer';

function App() {

  const dateTime = new Date('2025-02-21 23:55 .').getTime();
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
          titulo= "LA PICANTE x RKT FEST"
          img= "flyerhenry2.jpg"
          fecha= " Viernes 21-02 23:55"
          direccion= "Ciudad de batán - Momentos bailables"
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

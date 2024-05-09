import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/logoPicante"
import Eventos from "./components/events"
import Contador from "./components/contador"
import Titulos from './components/titulos';

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
        <Eventos 
        titulo= "LA PICANTE en BATÁN"
        img= "bgc-lapicante.jpeg"
        fecha= "18-05 00:00"
        direccion= "Batan - Zeven Club"
        entrada= "2500"
        dj="DJ TucaLesca"
        button= "Comprar Entradas"
        finalizado={false}
        />
    </div>
  );
}

export default App;

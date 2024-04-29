import logoPicante from './img/lapicante.png';
import logoSpicy from './img/spicy-logo.jpg';
import './App.css';
import Panfletos from './componentes/cartas';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='contenedor-header'>
          <img src={logoSpicy} className='logo-spicy'/>
        </div>
        <div className='contenedor-buscador'>
          <input className='buscador' type='search' placeholder='Boliches, Bares, Fiestas, etc'></input>
        </div>
      </div>
      <div className='contenedor-eventos'>
      <Panfletos
        imagen= "normandina"
        nombre= "La normandina" 
        precio= "5500"
        direccion= " Av. Patricio Peralta Ramos 5050"
        />
        <Panfletos
        imagen= "zwan"
        nombre= "Zwan"
        precio= "3500"
        direccion="Balneario 6 Playa Grande"
        />
      </div>
      <div className='footer'>
        <img src={logoPicante} className='logo-picante'/>
        <p>"by La Picante"</p>
      </div>
    </div>
  );
}


export default App;

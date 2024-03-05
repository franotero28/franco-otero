import logo from './img/lapicante.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='contenedor-header'>
          <img src={logo} className='logo-picante'/>
          <h1 className='h1-spicy'>Spicy</h1>
        </div>
        <div className='contenedor-buscador'>
          <input className='buscador' type='search' placeholder='Boliches, Bares, Fiestas, etc'></input>
        </div>
      </div>

      <div className='contenedor-form'>
        <p>Iniciar sesion</p>
        <p>Registrarse</p>
      </div>
    </div>
  );
}

export default App;

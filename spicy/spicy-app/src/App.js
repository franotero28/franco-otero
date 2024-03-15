import logo from './img/lapicante.png';
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Quicksand:wght@700&display=swap')
</style>

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='contenedor-header'>
          <h1 className='h1-spicy alata-regular quicksand'>Spicy</h1>
          <img src={logo} className='logo-picante'/>
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

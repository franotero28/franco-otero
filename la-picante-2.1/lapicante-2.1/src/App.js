import './App.css';
import Navbar from './components/navbar';
import Contenedor1 from "./components/video"

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
    </div>
  );
}

export default App;

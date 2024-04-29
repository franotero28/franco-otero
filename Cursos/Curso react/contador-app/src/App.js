import './App.css';
import Boton from './componentes/boton';
import logoReact from "./img/logo-react.png"
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='imagen-logo'
        src={logoReact}
        alt='imagen logotipo'
        />
      </div>
      <div className='contenedor-contador'>
        <Contador 
        numClicks={numClicks}
        />
        <div className='contenedor-botones'>
          <Boton
          texto= "Click"
          esBotonClick={true} 
          manejarClick={manejarClick}
          />
          <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

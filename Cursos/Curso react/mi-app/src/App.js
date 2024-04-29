import Testimonio from "./componentes/testimonio.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Testimonios de futbolistas</h1>
      <Testimonio
      nombre = "Lionel Messi"
      pais = "Argentina"
      imagen = "messi"
      oficio = "Futbolista"
      textoTestimonio = "Cuando termino de entrenar con el inter de miami y de estar con mi familia, me pongo a estudiar programacion"
      />
      <Testimonio 
      nombre = "Cristiano Ronaldo"
      pais = "Portugal"
      imagen = "cristiano"
      oficio = "Futbolista"
      textoTestimonio = "Cuando termino de entrenar con el al hilal y de estar con mi familia, me pongo a estudiar programacion"
      />
      </div>
    </div>
  );
}

export default App;

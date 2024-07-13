import './App.css';
import Intro from './components/intro';
import Navbar from './components/navegador'
import Proyectos from './components/proyectos';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proyectos />
    </div>
  );
}

export default App;

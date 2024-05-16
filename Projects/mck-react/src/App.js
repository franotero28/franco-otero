import './App.css';
import Certificados from './components/certificados';
import Navbar from './components/navbar';
import Titulos from './components/titulos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Titulos />
      <Certificados />
    </div>
  );
}

export default App;

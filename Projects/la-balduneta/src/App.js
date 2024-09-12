import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio';
import Jugador from './pages/jugador';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/jugadores/:id' element={<Jugador />}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div> 
  );
}

export default App;

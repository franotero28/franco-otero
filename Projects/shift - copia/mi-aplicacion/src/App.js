import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import Inicio from './pages/inicio'
import ReservaHorarios from './pages/Reserva-horarios.jsx';
import EditHorarios from './pages/editar-horarios.jsx' 

function App() {

  return (
    <div className="App">

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/reserva-horarios' element={<ReservaHorarios />}/>
          <Route path='/editar-horarios' element={<EditHorarios />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

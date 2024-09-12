import './App.css';
import Inicio from './pages/inicio';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}/>
        </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;

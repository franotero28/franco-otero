import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BarraNav from './components/navbar';
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/login'
import Clientes from './pages/clientes'


function App() {
  return (
    <div className="App">

    <BarraNav />

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/clientes' element={<Clientes />}/>
        </Routes>
    </BrowserRouter>

    <Footer />

    </div>
  );
}

export default App;

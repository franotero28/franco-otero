import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BarraNav from './components/navbar';
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/login'
import Clientes from './pages/clientes'
import Marcas from './pages/marcas';
import Products from './pages/productos'
import TypeProducts from './pages/typeproducts'

function App() {
  return (
    <div className="App">

    <BarraNav />

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/clientes' element={<Clientes />}/>
          <Route path='/marcas' element={<Marcas />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/type-products' element={<TypeProducts />}/>
        </Routes>
    </BrowserRouter>

    <Footer />

    </div>
  );
}

export default App;

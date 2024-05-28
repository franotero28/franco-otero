import './App.css';
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

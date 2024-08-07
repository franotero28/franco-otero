import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Blog from './pages/blog-mck';
import Home from './pages/home'
import CreateBlog from './components/CreateBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/crear-blog' element={<CreateBlog />}/>
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

import '../css/navbar.css';
import Titulos from '../components/titulos';
import Certificados from '../components/certificados';
import SobreMi from '../components/sobremi';
import CardBlog from '../components/card-blog';
import Countdown from '../components/contador';


function Home() {

  const dateTime = new Date('2024-07-25 00:00').getTime();
  const timestamp = Math.floor(dateTime / 1000);
  const ahora = Date.now();
  const timeAhora = Math.floor(ahora / 1000);

  const segundos1 = timestamp - timeAhora


  return (
    <div className="App">
        <Titulos />
        <Certificados />
        <SobreMi />
        <Countdown  segundos1={segundos1}/>
        <h3 className='titulo-blog'>MI BLOG</h3>
        <div className='contenedor-blog'>
          <CardBlog />
        </div>
    </div>
  );
}

export default Home;
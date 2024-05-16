import React from "react";
import "../css/navbar.css"

function Navbar(){
    return(
        <header id="Header">
        <div class="contenedor-header-1">
          <div class="contenedor-header-imagen">
           <img class="logo-mck" src={require("../img/logo-mck.png")} alt="" />
          </div>
          <div class="contenedor-header-sociales">
            <ul class="redes_sociales">
              <li class="red"><a target="_blank" href="https://www.instagram.com/mariaceliakochur/"class="icon"><i class="fab fa-instagram"></i></a></li>
              <li class="red"><a target="_blank" href="https://www.youtube.com/@ampliandoconsciencia"class="icon"><i class="fab fa-youtube"></i></a></li>
              <li class="red"><a target="_blank" href="https://www.facebook.com/mariacelia.kochur"class="icon"><i class="fab fa-facebook"></i></a></li>
              <li class="red"><a target="_blank" href="https://www.linkedin.com/in/maria-celia-kochur-aab29819/"class="icon"><i class="fab fa-linkedin"></i></a></li>
              <li class="red"><a target="_blank" href="https://api.whatsapp.com/message/3SS7WQODCI22I1?autoload=1&app_absent=0"class="icon"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="tabeador">
          <a class="tabs" href="#info">SOBRE MI</a>
          <a class="tabs" href="#contenedor4">MATERIAL</a>
          <a class="tabs" href="#proyectos">PROYECTOS</a>
          <a class="tabs" href="#listasReproduccion">LISTAS R.</a>
        </div>
      </header>
    )
}

export default Navbar
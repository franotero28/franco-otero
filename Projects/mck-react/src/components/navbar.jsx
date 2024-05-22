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
              <li class="red"><a target="_blank" href="https://api.whatsapp.com/send?phone=2235759355&text=Hola,%20te%20escribo%20para%20agendar%20una%20sesión" class="icon"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="tabeador">
          <a class="tabs" href="/#sobreMi">SOBRE MI</a>
          <a class="tabs" href="/#experiencia">CERTIFICADOS</a>
          <a class="tabs" href="/#contador">PROXIMA CHARLA</a>
          <a class="tabs" href="/blog">BLOG</a>
        </div>
      </header>
    )
}

export default Navbar
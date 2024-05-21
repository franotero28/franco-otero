import React from "react";
import styled from "styled-components";

function Footer(){
    return(
        <ContenedorFooter>
            <div className="redes">
                <a target="_blank" href="https://www.instagram.com/mariaceliakochur/"><i class="fab fa-instagram"></i></a>
                <a target="_blank" href="https://www.youtube.com/@ampliandoconsciencia"><i class="fab fa-youtube"></i></a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=2235759355&text=Hola,%20te%20escribo%20para%20agendar%20una%20sesión"><i class="fab fa-whatsapp"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/maria-celia-kochur-aab29819/"><i class="fab fa-linkedin"></i></a>
                <a target="_blank" href="https://www.facebook.com/mariacelia.kochur"><i class="fab fa-facebook"></i></a>
            </div>
            <img src={require("../img/logo-mck.png")} alt="" width={150} />
            <p><strong>Maria Celia Kochur © 2024</strong></p>
        </ContenedorFooter>
    )
}

const ContenedorFooter = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:20px;
    background-color:#ffffff;

    .redes{
        display:flex;
        justify-content:space-around;
    }
    
    i{
        font-size:30px;
        margin:20px;
        text-decoration:none;
    }

    a{
        text-decoration:none;
        color:black;
    }

    a:hover{
        color:grey;
        transform:scale(1.05);
        transition:0.5s;
    }
`

export default Footer
import React from "react";
import styled from "styled-components";

function Footer(){
    return(
        <ContenedorFooter>
            <div id="contacto" className="footer">
            <img src={require("../img/logo-balduneta.png")}  alt="logo-balduneta" width="350" />
            <p><a target="_blank" href="https://www.twitch.tv/iabalduneta/"><i class="fab fa-twitch m-3"></i></a></p>
            <p><a target="_blank" href="https://www.youtube.com/@blessedfran03/videos"><i class="fab fa-youtube m-3"></i></a></p>
            <div className="contact">
                <p>📩 labalduneta@gmail.com</p>
                <p>📱 223-634-7388</p>
                </div>
            </div>
        </ContenedorFooter>
    )
}

const ContenedorFooter = styled.div`
    width:100%;

    .footer{
    margin-top: 50px;
    background-color: rgba(225, 223, 255, 0.466);
    display: flex;
    justify-content: center;
    align-items: center;
    }

    @media screen and (max-width:500px) {
        .footer{
            flex-direction: column;
        }
    }

.contact{
    color: white;
    font-family: 'Outfit', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}   

.fab{
    font-size: xxx-large;
    text-decoration: none;
    color: blueviolet;
    transition: transform .2s; 
}

.fab:hover{
    transform: scale(1.2); 
}
`

export default Footer
import React from "react";
import styled from "styled-components";

function Titulos(){
    return(
        <ContenedorTitulos>
            {/*<p className="title-1">¿ESTAN LISTOS?</p>*/}  
            <p className="title">LA + PICANTE<span className="span"></span></p>
            <p className="sub-title"><strong>Te la vas a perder?</strong></p>
        </ContenedorTitulos>
    )
}

const ContenedorTitulos = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    .sub-title{
        font-size:50px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    }

    .title{
        color:rgb(#000000);
        font-size:150px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        text-shadow: 
        1px -1px 0 #767676, 
        -1px 2px 1px #737272, 
        -2px 4px 1px #767474, 
        -3px 6px 1px #787777, 
        -4px 8px 1px #7b7a7a, 
        -5px 10px 1px #7f7d7d, 
        -6px 12px 1px #828181, 
        -7px 14px 1px #868585, 
        -8px 16px 1px #8b8a89, 
        -9px 18px 1px #8f8e8d, 
        -10px 20px 1px #949392, 
        -11px 22px 1px #999897;
    }
    span{
        font-family:monospace;
    }
    .title-1{
        font-size:150px;
        text-align:center;
        color:#ffffff;
        letter-spacing: -7px;
        font-weight:700;
        text-transform:uppercase;
        animation:blur .999s ease-out infinite;
        text-shadow:0px 0px 5px #fff,
        0px 0px 7px #fff;
    }

@keyframes blur{
  from{
      text-shadow:0px 0px 10px #1b0000,
      0px 0px 10px #1b0000, 
      0px 0px 25px #1b0000,
      0px 0px 25px #1b0000,
      0px 0px 25px #1b0000,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #7B96B8,
      0px 0px 150px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px -10px 100px #7B96B8,
      0px -10px 100px #7B96B8;}
}

    @media screen and (max-width:800px) {
        .title{
            font-size:50px;
            text-shadow: 
        1px -1px 0 #767676, 
        -1px 2px 1px #737272, 
        -2px 4px 1px #767474, 
        -3px 6px 1px #787777, 
        -4px 8px 1px #7b7a7a, 
        -5px 10px 1px #7f7d7d, 
        -6px 12px 1px #828181, 
        -7px 14px 1px #868585, 
        -7px 14px 1px #8b8a89, 
        -7px 14px 1px #8f8e8d, 
        -7px 14px 1px #949392, 
        -7px 14px 1px #999897, 
        -7px 14px 1px #9e9c9c, 
        -7px 14px 1px #a3a1a1, 
        -7px 14px 1px #a8a6a6, 
        -7px 14px 1px #adabab, 
        -7px 14px 1px #b2b1b0, 
        -7px 14px 1px #b7b6b5, 
        -7px 14px 1px #bcbbba, 
        }
        .sub-title{
            font-size:25px;
        }
        width:100%;
    }
`

export default Titulos
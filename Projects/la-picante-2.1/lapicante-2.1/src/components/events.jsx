import React from "react";
import styled from "styled-components";

function Eventos (props){
    return(
        <Header>
            <p className="title-1">¿ESTAN LISTOS?</p>
            <p className="title">LA MAS PICANTE<span className="span"></span></p>
            <p>{props.fecha}</p>
            <p>{props.entrada}</p>
            <p>{props.direccion}</p>
            <p>{props.ads}</p>
        </Header>
    )
}

const Header = styled.div`
    font-family: "Avant Garde", Avantgarde, "Century Gothic",
    CenturyGothic, "AppleGothic", sans-serif;
    text-align:center;
    p{
        margin:0px;
        padding:30px;
        font-size:60px;
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
      -11px 22px 1px #999897, 
      -12px 24px 1px #9e9c9c, 
      -13px 26px 1px #a3a1a1, 
      -14px 28px 1px #a8a6a6, 
      -15px 30px 1px #adabab, 
      -16px 32px 1px #b2b1b0, 
      -17px 34px 1px #b7b6b5, 
      -18px 36px 1px #bcbbba, 
      -19px 38px 1px #c1bfbf, 
      -20px 40px 1px #c6c4c4, 
      -21px 42px 1px #cbc9c8, 
      -22px 44px 1px #cfcdcd, 
      -23px 46px 1px #d4d2d1, 
      -24px 48px 1px #d8d6d5, 
      -25px 50px 1px #dbdad9, 
      -26px 52px 1px #dfdddc, 
      -27px 54px 1px #e2e0df, 
      -28px 56px 1px #e4e3e2;
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
`

export default Eventos
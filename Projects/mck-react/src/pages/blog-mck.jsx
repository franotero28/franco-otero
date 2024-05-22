import React from "react";
import styled from "styled-components";
import ContenidoBlog from "../components/contenido-blog";


function Blog(){
    return(
        <ContenedorBlog>
            <h1>BIENVENIDOS A MI BLOG</h1>
                <ContenidoBlog
                titulo="¿Que es la PNL?"
                contenido='La Programación Neurolingüística (PNL) es un enfoque psicológico que estudia cómo el lenguaje, los pensamientos y los comportamientos se interrelacionan para influir en nuestra experiencia y éxito en la vida. Se basa en la idea de que podemos aprender de las personas exitosas y modelar sus comportamientos y estrategias para mejorar nuestra propia vida. La PNL ofrece técnicas prácticas para mejorar la comunicación, gestionar las emociones, establecer metas efectivas y promover el cambio personal y profesional. Se aplica en diversos campos como la terapia, el coaching, el liderazgo, la negociación y la venta, con el objetivo de potenciar el rendimiento y el bienestar de las personas.'
                img="PNL.jpg"
                fechaup="22/5/2024"
                />
                <ContenidoBlog 
                titulo="¿Para que sirve abrir mi registro Akashico?"
                contenido='Abrir tu registro akáshico implica acceder a un supuesto "archivo" cósmico que contiene información sobre todas las experiencias pasadas, presentes y futuras de tu alma. Se cree que esta información puede proporcionar claridad sobre tu propósito de vida, patrones recurrentes, relaciones, desafíos y oportunidades. Al conectarte con tu registro akáshico, puedes obtener insights profundos sobre tu camino espiritual, sanación emocional y orientación para tomar decisiones importantes en tu vida. Esta práctica a menudo se realiza a través de meditación, visualización o con la ayuda de un terapeuta espiritual.'
                img="RA.jpg"
                fechaup="22/5/2024"
                />
                <ContenidoBlog
                titulo="¿Que es la Hipnosis Ericksoniana?"
                contenido='La Hipnosis Ericksoniana es un estilo de hipnosis desarrollado por Milton H. Erickson, un destacado psiquiatra. Se caracteriza por su enfoque altamente personalizado y flexible, adaptado a las necesidades individuales del cliente. Utiliza metáforas, narrativas y técnicas indirectas para acceder al inconsciente y promover el cambio deseado. Se centra en aprovechar los recursos internos del cliente y empoderarlo en el proceso de transformación personal.'
                img="HE.jpg"
                fechaup="22/5/2024"
                />
        </ContenedorBlog>
    )
}

const ContenedorBlog = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h1{
        color:white;
        font-size:40px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:10px;
        margin-top:50px;
        text-align:center;
    }
`

export default Blog
import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"

const URI = `http://localhost:8000/blogs`

function CompShowBlogs(){

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        getBlogs()
    },[])


    const getBlogs = async ()=>{
       const res = await axios.get(URI)
       setBlogs(res.data)
    }
    return(
        <>
        { blogs.map ( blog =>(
            
        <ContainerBlog key={blog.id}>
            <h4>{blog.titulo}</h4>
                <div className="contenido-blog">
                    <p className="p-contenido">-{blog.contenido}</p>
                    <a href={blog.link} target="_blank" className={`a-contenido ${blog.link == "" ? "inactivo" : ""}`}>Ver en youtube</a>

                </div>
                <div className="botones-blog">
                    <button className="boton-blog m-3">Comprar material de estudio</button>

                </div>
            <p className="p-fecha">Fecha de Actualizacion: {blog.updatedAt}</p>
        </ContainerBlog>
        ))}
        </>
    )
}

const ContainerBlog = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px;
    background-color:#e7e7e796;
    width:100%;

    h4{
        color:white;
        font-size:25px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:1px;
    }

    .contenido-blog{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
    }

    .p-contenido{
        text-align:center;
        font-size:17px;
    }

    .a-contenido{
        text-decoration:none;
        background:#8f6581;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        color:white;
        padding:5px;
        border-radius:5px;
    }

    .a-contenido.inactivo{
        display:none;
    }

    .a-contenido:hover{
        transform:scale(1.05);
        transition:0.5s;
    }

    .botones-blog{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .boton-blog{
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:1px;
        color:white;
        background:#8f6581;
        border:0px;
        border-radius:5px;
        padding:5px;
    }

    .boton-blog:hover{
        transform:scale(1.05);
        transition:0.5s;
    }

    .p-fecha{
        margin:0px;
    }


    @media screen and (max-width:800px) {
        .contenido-blog{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
    }
`

export default CompShowBlogs
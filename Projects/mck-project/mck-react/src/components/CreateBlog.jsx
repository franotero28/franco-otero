import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
import styled from "styled-components";


const URI = `http://localhost:8000/blogs/`

function CompCreateBlog(){

    const [blogs, setBlogs] = useState([])
    const [ titulo, setTitulo] = useState("")
    const [ contenido, setContenido] = useState("")
    const [ link, setLink] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
        getBlogs()
    },[])

    //Guardar procedimiento
    const guardar = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {titulo: titulo, contenido:contenido, link:link})
        navigate('/')
    }

    const getBlogs = async ()=>{
        const res = await axios.get(URI)
        setBlogs(res.data)
     }

    const deleteBlog = async (id) => {
        axios.delete(`${URI}${id}`)
        getBlogs()
    }



    return(
        <ContenedorFormulario>

            { blogs.map ( blog =>(
            
            <div className="contenedor-post" key={blog.id}>
                <h4>{blog.titulo}</h4>
                    <div className="contenido-blog">
                        <p className="p-contenido">-{blog.contenido}</p>
                        <a href={blog.link} target="_blank" className={`a-contenido ${blog.link == "" ? "inactivo" : ""}`}>Ver en youtube</a>
                    </div>
                    <div className="botones-blog">
                        <button className="boton-blog m-3">Comprar material de estudio</button>
                    </div>
                <p className="p-fecha">Fecha de Actualizacion: {blog.updatedAt}</p>
                <div className="contenedor-botones">
                    {/* <Link to={`/edit/${blog.id}`} className="btn btn-info m-3">Editar</Link> */}
                    <button onClick={()=>{deleteBlog(blog.id); alert("Post Eliminado")}} className="btn btn-danger m-3">Eliminar post</button>
                </div>
            </div>
            ))}

            <h1>Crear Post</h1>
            <form onSubmit={guardar}>
                <div className="form-floating mb-2 mt-2 w-100">
                            <input
                            type="text"
                            className="form-control" 
                            value={titulo}
                            onChange={ (e)=> setTitulo(e.target.value) }
                            id="#" 
                            placeholder="Titulo"
                            />
                            {/*{errors.nombreVariedad?.type === "required" && <span>Debe ingresar nombre válido</span>}*/}
                        <label htmlFor="#">Titulo</label>
                </div>
                <div className="form-group mb-2 mt-2 w-100">
                    <label for="exampleFormControlTextarea1">Contenido</label>
                    <textarea 
                    value={contenido} 
                    onChange={ (e)=> setContenido(e.target.value) } 
                    class="form-control" 
                    id="exampleFormControlTextarea1" rows="3"/>
                </div>
                <div className="form-floating mb-2 mt-2 w-100">
                    <input
                            type="text"
                            className="form-control" 
                            value={link}
                            onChange={ (e)=> setLink(e.target.value) }
                            id="#" 
                            placeholder="Titulo"
                            />
                    <label >Link de youtube (opcional)</label>
                </div>
                <button className="btn btn-primary m-3">Subir post</button>

             </form>
        </ContenedorFormulario>
    )
}

const ContenedorFormulario = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;

    form{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding-left:50px;
        padding-right:50px;
        width:100%;
    }
    .contenedor-post{
        margin-top:50px;
        margin-bottom:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:20px;
        background-color:#e7e7e796;
        width:100%;
    }

    .contenedor-botones{
        display:flex;
        justify-content:center;
        align-items:center;
    }

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

export default CompCreateBlog
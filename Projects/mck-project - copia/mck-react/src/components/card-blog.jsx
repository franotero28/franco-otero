import React from "react";
import styled from "styled-components";
import axios from "axios"
import { useState, useEffect } from "react"

const URI = 'http://localhost:8000/blogs/'

function Blog(){

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
        <ContenedorBlog id="blog" key={blog.id}>
            <a href={`/blog`}>
                <div className="card-blog">
                    <h6>{blog.titulo}</h6>
                    <hr />
                    <p>{blog.updatedAt}</p>
                </div>
            </a>
        </ContenedorBlog>
        ))}
        </>
    )
}

const ContenedorBlog = styled.div`
    display:flex;
    flex-direction:column;

    a{
        text-decoration:none;
        color:black;
    }

    .card-blog{
    background-color:#fffdfdb7;
    padding:25px;
    margin:10px;
    letter-spacing:1px;
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    font-weight:bold;
    cursor:pointer;
    }

    .card-blog:hover{
        transform:scale(1.05);
        transition:0.2s;
        background-color:#dfdfdfcf;
    }

    h6{
        margin-bottom:15px;
        
    }
    hr{
        margin:0px;
    }
    p{
        margin:0px;
        margin-top:10px;
    }
`

export default Blog
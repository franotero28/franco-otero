import React from "react";
import styled from "styled-components";
import CompShowBlogs from "../components/ShowBlog";

function Blog(){
    return(
        <ContenedorBlog>

            <CompShowBlogs />

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
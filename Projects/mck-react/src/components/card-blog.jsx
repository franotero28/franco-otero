import React from "react";
import styled from "styled-components";

function Blog(props){
    return(
        <ContenedorBlog id="blog">
            <div className="card-blog">
                <h6>{props.titulo}</h6>
                <hr />
                <p>{props.fechaup}</p>
            </div>
        </ContenedorBlog>
    )
}

const ContenedorBlog = styled.div`
    display:flex;
    flex-direction:column;

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
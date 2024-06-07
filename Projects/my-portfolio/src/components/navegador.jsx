import styled from "styled-components";

function Navbar(){
    return(
        <ContenedorNavbar>
            <ul className="ul-tab">
                <li className="tab">{"<"}   Proyectos</li>
                <li className="tab">Sobre Mi</li>
                <li className="tab">Contacto   {"/>"}</li>
            </ul>
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#d8d8d8;
    border:solid 1px black;
    
    .ul-tab{
        display:flex;
        justify-content:space-around;
    }

    .tab{
        color: rgb(0, 0, 97);
        font-family: "Prompt", sans-serif;
        font-style: normal;
        letter-spacing:1px;
        cursor:pointer;
        list-style-type:none;
        margin:20px;
    }
`

export default Navbar
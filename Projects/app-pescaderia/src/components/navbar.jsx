import React from "react";
import { Container, Nav ,Navbar} from "react-bootstrap";
import styled from "styled-components";

function BarraNav(){
    return(
        <ContenedorNavbar>
            <Navbar expand="lg" className="bg-dark" data-bs-theme="light">
            <Container>
                <p className="img-user mr-3">A</p>
                <Navbar.Brand href="/"><img src={require("../img/logo_texto_icono.png")} alt="" width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-body-dark" data-bs-theme="dark"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="link-nav" href="/">Menu</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="#products">Productos</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="#price">Precios</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="/clientes">Clientes</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="/login">Ingresar</Nav.Link><hr />
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </ContenedorNavbar>           
    )
}

const ContenedorNavbar = styled.div`
    color:white;
    background-color:grey;

    hr{
        margin:0;
    }

    @media screen and (min-width:850px){
        Navbar{
            display:flex;
            justify-content:space-around;
        }
    }
    .img-user{
        cursor:pointer;
        background-color: rgba(33, 37, 61, 1 );
        border: white 1px solid;
        text-align:center;
        padding-top:3px;
        width:35px;
        height:35px;
        margin:0px;
        margin-right:20px;
        border-radius:90px;
    }

    .link-nav{
        color:white;
    }
`

export default BarraNav
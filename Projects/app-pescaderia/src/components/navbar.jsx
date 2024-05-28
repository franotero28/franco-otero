import React from "react";
import { Container, Nav ,Navbar} from "react-bootstrap";
import styled from "styled-components";

function BarraNav(){
    return(
        <ContenedorNavbar>
            <Navbar expand="lg" className="bg-dark" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home"><img className="img-user" src={require("../img/admin1.jpg")} alt="" width={50} /></Navbar.Brand>
                <Navbar.Brand href="#home"><img src={require("../img/logo_texto_icono.png")} alt="" width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-body-dark" data-bs-theme="dark"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="link-nav" href="#home">Menu</Nav.Link>
                    <Nav.Link className="link-nav" href="#products">Productos</Nav.Link>
                    <Nav.Link className="link-nav" href="#price">Precios</Nav.Link>
                    <Nav.Link className="link-nav" href="#dist">Distribuidores</Nav.Link>
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

    @media screen and (min-width:850px){
        Navbar{
            display:flex;
            justify-content:space-around;
        }
    }
    .img-user{
        border-radius:90px;
    }

    .link-nav{
        color:white;
    }
`

export default BarraNav
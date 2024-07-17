import React from "react";
import { Container, Nav ,Navbar} from "react-bootstrap";
import styled from "styled-components";

function BarraNavbar(){
    return(
        <ContenedorNavbar>

        <Navbar expand="lg" className="bg-white">
            <Container>
                <Navbar.Brand href="/"><img src={require("../img/logo-recortado.png")} alt="" width={120}/></Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" className="bg-body-dark" data-bs-theme="dark"/>
                <Navbar.Collapse data-bs-theme="dark" id="basic-navbar-nav">
                <Nav className="me-auto d-flex justify-center">
                    <Nav.Link className="link-nav" data-bs-theme="black" href="/">Inicio</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="/reserva-horarios">Reservar Turno</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="/">Sobre Nosotros</Nav.Link><hr />
                    <Nav.Link className="link-nav" href="/">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr />
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    max-width:100%;
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    color:black;
    font-weight:bold;
    
.navbar-toggler-icon{
    background-image:url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 1%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
}

.link-nav{
    display:flex;
    justify-content:center;
}
`

export default BarraNavbar
import React, { useState }from "react";
import "../css/navbar.css"
import BotonHamburguesa from "./btnHamburguer";

function Navbar () {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className="contenedor-navbar">
            <h2>Navbar hamburguer</h2>
            <div className="contenedor-links">
                <a className="link" href="#">Home</a>
                <a className="link" href="#">Blog</a>
                <a className="link" href="#">Contact</a>
            </div>
            <div className="contenedor-hamburguesa">
                <BotonHamburguesa clicked={clicked} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Navbar


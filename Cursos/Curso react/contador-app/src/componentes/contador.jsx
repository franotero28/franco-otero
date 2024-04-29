import React from "react";
import "../estilos-css/contador.css"

function Contador ({ numClicks }){
    return (
        <div className="contador"> 
            {numClicks}
        </div>
    )
}

export default Contador

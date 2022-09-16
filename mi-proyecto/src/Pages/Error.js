import React from "react";
import {Link} from 'react-router-dom';

function Error(){
    return(
        <React.Fragment>
        <h1 className="tituloPrincipal">Error</h1>
        
        <h2 className="textoerror"> Not found </h2>
        <div className="cajafotoerror">   
        <img src='/img/42901.png' alt="Error 404" className="imgcaratriste"/>
        </div>
        <p className="textoerror"> Sorry, the page you are looking for doesn´t exist or an other error occurred </p>
        <p className="textoerror"> Go back, or head to <Link to='/'> Home </Link> to choose a new direction </p>
        </React.Fragment>
    )
}

export default Error; 
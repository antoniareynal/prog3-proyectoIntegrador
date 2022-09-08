import React from 'react';

function Navbar(){
    return (
        <nav className="headerDesktop">
            <div className="novaLogo">
                <a href="index.html"><img src="./img/novaLogo.png" alt="Logo NOVA"/></a>
            </div>

            <div className="menuDesktop">
                <ul>
                    <li> <a href="index.html">Home |</a> </li>
                    <li> <a href="favorite.html">Favoritos |</a> </li>
                    <li> <a href="genres.html">Ver Todas |</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
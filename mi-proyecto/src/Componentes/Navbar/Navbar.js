import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="headerDesktop">
            <div className="novaLogo">
                <img src="./img/novaLogo.png" alt="Logo NOVA"/>
            </div>

            <div className="menuDesktop">
                <ul>
                    <li> Home | </li>
                    <li> Favoritos | </li>
                    <li> Ver Todas | </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
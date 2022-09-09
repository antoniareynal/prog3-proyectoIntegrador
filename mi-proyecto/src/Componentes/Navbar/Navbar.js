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
                    <li><Link to='/'> Home | </Link></li>
                    <li><Link to='/favoritos'> Favoritos | </Link></li>
                    <li><Link to='/popularmovies'>Popular Movie  |</Link>  </li>
                    <li><Link to='/upcomingmovies'>Upcoming Movies</Link>  </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
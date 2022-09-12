import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="headerDesktop">
            <div className="novaLogo">
            <Link to='/'> <img src="/img/novaLogo.png" alt="Logo NOVA"/></Link>
            </div>

            <div className="menuDesktop">
                <ul>
                    <li><Link to='/'> Home | </Link></li>
                    <li><Link to='/favoritos'> Favorites | </Link></li>
                    <li><Link to='/popularmovies'>Popular Movies  |</Link>  </li>
                    <li><Link to='/upcomingmovies'>Upcoming Movies</Link>  </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react';
import react from 'react';

function Footer(){
    return(
        <React.Fragment>
            <div className = "FooterTodo">
            <ul className="LinkedinLista"> 
                <li><a href="https://www.linkedin.com/in/delfina-galarza-69b853207/" target="_blanck">Delfina Galarza |</a></li>
                <li><a href="https://www.linkedin.com/in/i%C3%B1aki-valencia-918555207" target="_blanck">Iñaki Valencia |</a></li>
                <li><a href="https://www.linkedin.com/in/maria-vaccario-833439212/" target="_blanck">Maria Vaccario</a></li>
            </ul> 
            
            <a href="https://www.themoviedb.org/?language=es" target="_blanck" class="tmdbLogoFooterMobile"><img src="./img/tmdb_logo.svg" alt="TMDB Logo"/></a>

            <a href="https://www.themoviedb.org/?language=es" target="_blanck" class="tmdbLogoDesktop"><img src="./img/tmdb_logo_desktop.svg" alt="TMDB Logo"/></a>
            </div>
        </React.Fragment>
    );
}

export default Footer;
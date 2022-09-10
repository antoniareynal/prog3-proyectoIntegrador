import React, {Component} from 'react';
import '../Componentes/CardMovie/CardMovie'

class PopularMovies extends Component {
    constructor(){
        super();
        this.state = {
            pMovies: []
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState(
            {pMovies: data.results}
        )).catch(error => console.log(error));
 
    }

verMas(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=2')
        .then(response => response.json())
        .then(data => this.setState({pMovies: data.results}
        ))
        .catch(error => console.log(error));
}

render(){
    console.log('esto es peliculas')
    return(
        <React.Fragment>

            <h1 className="tituloPrincipal">Popular Movies</h1>
                <section className="peliculasSeries peliculasP">
                        <article>
                            
                        </article>
                </section>
        </React.Fragment>
    )
}



}

export default PopularMovies;

import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'

class PopularMovies extends Component {
    constructor(){
        super();
        this.state = {
            pMovies: [],
            
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
    return(
        
        <React.Fragment>
            
        <h1 className="tituloPrincipal">Popular Movies</h1>
        <section className="peliculasSeries peliculasP">
                {this.state.pMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
        </section>


        <button className="boton-vermas"onClick={()=> this.verMas()}>Load more</button>

    

        </React.Fragment>
    )
}



}

export default PopularMovies;

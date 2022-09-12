import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'

class PopularMovies extends Component {
    constructor(){
        super();
        this.state = {
            page: 1,
            pMovies: [],
            morepMovies: []
            
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState(
            {pMovies: data.results,
            morepMovies: data.results,
            page: this.state.page +1}
        )).catch(error => console.log(error));
 
    }

verMas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState(
            {pMovies: data.results.concat(this.state.pMovies),
                morepMovies: data.results.concat(this.state.morepMovies)}
        ))
        .catch(error => console.log(error));
        this.setState({
           page: this.state.page+1
        })
        
}

render(){
    return(
        
        <React.Fragment>
            
        <h1 className="tituloPrincipal">Popular Movies</h1>
        <button className="boton-vermas-home"onClick={()=> this.verMas()}>Load more</button>
        <section className="peliculasSeries peliculasP">
                {this.state.pMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
        </section>



    

        </React.Fragment>
    )
}



}

export default PopularMovies;

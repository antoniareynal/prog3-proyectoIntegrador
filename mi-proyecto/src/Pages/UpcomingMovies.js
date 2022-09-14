import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie';
import Formulariofiltro from '../Componentes/Formulariofiltro/Formulariofiltro';


class upcomingMovies extends Component {
    constructor(){
        super();
        this.state = {
            page: 1,
            upMovies: [],
            moreMovies: []
           
        }
    }

verMas(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState(
        {
            upMovies: data.results.concat(this.state.upMovies),
            moreMovies: data.results.concat(this.state.moreMovies)
        }
        ))
        .catch(error => console.log(error));
        this.setState({page: this.state.page+1})
}

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState(
            {upMovies: data.results,
            moreMovies: data.results,
            page: this.state.page + 1}
        )).catch(error => console.log(error));
 
    }

    filtrarPeliculas(Filtro){ 
        let peliculasFiltradas = this.state.upMovies.filter( pelicula => pelicula.title.toLowerCase().includes(Filtro.toLowerCase()))
        this.setState({
            moreMovies: peliculasFiltradas,
        })
    }



render(){
    return(
        <React.Fragment>

        <div className='busquedaPelisFiltro'>
             <Formulariofiltro filtrarPeliculas={(Filtro)=>this.filtrarPeliculas(Filtro)}/>
        </div>

        
        <h1 className="tituloPrincipal">Upcoming Movies</h1>
        <button className="boton-vermas-home"onClick={()=> this.verMas()}>Load more</button>
        <section className="peliculasSeries peliculasP">
                {this.state.upMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
        </section>

       


        </React.Fragment>
    )
}


}

export default upcomingMovies;
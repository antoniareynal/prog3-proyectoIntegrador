import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie';
import Formulariofiltro from '../Componentes/Formulariofiltro/Formulariofiltro';

class PopularMovies extends Component {
    constructor(){
        super();
        this.state = {
            page: 1,
            pMovies: [], // Todas las pelis
            morepMovies: [],
            loading: true
            
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                pMovies: data.results,
                morepMovies: data.results,
                loading: true,
                page: this.state.page + 1

            }
            )).catch(error => console.log(error));
    
    }

    verMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState(
            {
                pMovies: this.state.pMovies.concat(data.results),
                morepMovies:this.state.morepMovies.concat(data.results),
                loading: false
            },
            
            ))
            .catch(error => console.log(error));
            this.setState({page: this.state.page+1})    
    }

    filtrarPeliculas(Filtro){ 
        let peliculasFiltradas = this.state.pMovies.filter( pelicula => pelicula.title.toLowerCase().includes(Filtro.toLowerCase()))
        this.setState({
            morepMovies: peliculasFiltradas,
        })
    }




render(){
    return(
        
        <React.Fragment>
            
        <div className='buscador-home'>
             <Formulariofiltro filtrarPeliculas={(Filtro)=>this.filtrarPeliculas(Filtro)}/>
        </div>

        <h1 className="tituloPrincipal">Popular Movies</h1>
        
        <section className="peliculasSeries peliculasP">
                {this.state.morepMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
        </section>
        <button className="boton-vermas-home"onClick={()=> this.verMas()}>Load more</button>


    

        </React.Fragment>
    )
}



}

export default PopularMovies;
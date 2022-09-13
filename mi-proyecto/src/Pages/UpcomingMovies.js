import React, {Component} from 'react';
import Formulariofiltro from '../Componentes/Formulariofiltro/Formulariofiltro';
import CardMovie from '../Componentes/CardMovie/CardMovie';

class upcomingMovies extends Component {
    constructor(){
        super();
        this.state = {
            page: 1,
            upMovies: [],
            favsMessage: '/img/favorite.png'
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                upMovies: data.results,
                page: this.state.page + 1
            }
            )).catch(error => console.log(error));
    
    }

    verMas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState(
            {
                upMovies: this.state.upMovies.concat(data.results),
                
            },
            
            ))
            .catch(error => console.log(error));
            this.setState({page: this.state.page+1})    
    }



render(){
    return(
        <React.Fragment>

        <div className='busquedaPelis'>
             <Formulariofiltro peliculasFiltradas={(Filtro)=>this.peliculasFiltradas(Filtro)}/>
        </div>

        <h1 className="tituloPrincipal">Upcoming Movies</h1>
        
        <section className="peliculasSeries peliculasP">
                {this.state.upMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
        </section>
        <button className="boton-vermas-home"onClick={()=> this.verMas()}>Load more</button>
       


        </React.Fragment>
    )
}


}

export default upcomingMovies;
import React, {Component} from 'react';
import CardUpcoming from '../Componentes/CardUpcoming/CardUpcoming';

class upcomingMovies extends Component {
    constructor(){
        super();
        this.state = {
            upMovies: [],
           
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState(
            {upMovies: data.results}
        )).catch(error => console.log(error));
 
    }

verMas(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=2')
        .then(response => response.json())
        .then(data => this.setState({upMovies: data.results}
        ))
        .catch(error => console.log(error));
}

render(){
    return(
        <React.Fragment>
        <h1 className="tituloPrincipal">Upcoming Movies</h1>
        <section className="peliculasSeries peliculasP">
                {this.state.upMovies.map((oneMovie, idx) => <CardUpcoming key ={ oneMovie + idx} upcomingData = {oneMovie}/>)}
        </section>

        <button className="boton-vermas"onClick={()=> this.verMas()}>Load more</button>


        </React.Fragment>
    )
}


}

export default upcomingMovies;
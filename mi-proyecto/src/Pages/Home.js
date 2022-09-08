import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'

class Home extends Component{
    constructor() {
    super();
    this.State = {
        moviesPopular: [],
        upComingMovies: []
    }
    }


    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.State(
            {moviesPopular: data.results}
        ))

        .then(()=>{
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c &language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.State(
                {upComingMovies: data.data}
            ))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));

    }
    render(){
        return(
            
                <article className="peliculasSeries peliculasP">
                    <h1 className="tituloPrincipal">Películas populares</h1>
                    <ul>
                        {this.state.moviesPopular.map((oneMovie, idx) => <CardMovie key = {oneMovie + idx} movieData = {oneMovie}/>)}
                    </ul>
                </article>
            
        )
    }
}

export default Home;
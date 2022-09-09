import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'
import CardUpcoming from '../Componentes/CardUpcoming/CardUpcoming'

class Home extends Component{
    constructor() {
    super();
    this.state = {
        moviesPopular: [],
        upcomingMovies: []
    }
    }


    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState(
            {moviesPopular: data.results},
        ))

        .then(()=>{
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {upcomingMovies: data.results}
            ))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));

    }
    render(){
        return(
            <React.Fragment>
                <h1 className="tituloPrincipal">Popular Movies</h1>
                <section className="peliculasSeries peliculasP">
                        {this.state.moviesPopular.map((oneMovie, idx) => <CardMovie key = {oneMovie + idx} movieData = {oneMovie}/>)}
                </section>

                
                <h1 className="tituloPrincipal">Upcoming Movies</h1>
                    <section className="peliculasSeries peliculasP">
                            {this.state.upcomingMovies.map((oneMovie, idx) => <CardUpcoming key ={ oneMovie + idx} upcomingData = {oneMovie}/>)}
                    </section>
                
            </React.Fragment>
        )
    }
}

export default Home;
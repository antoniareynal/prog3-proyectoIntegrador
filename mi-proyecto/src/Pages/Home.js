import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'


class Home extends Component{
    constructor() {
    super();
    this.state = {
        moviesPopular: [],
        upComingMovies: []
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
                {upComingMovies: data.data}
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
                    <article>
                        {this.state.moviesPopular.map((oneMovie, idx) => <CardMovie key = {oneMovie + idx} movieData = {oneMovie}/>)}
                    </article>
                </section>

                <div>
                    <section>
                        <article>
                            {this.state.upComingMovies.map((UpcomingMovie, idx) => <CardUpcoming key ={ UpcomingMovie + idx} UpcomingData = {UpcomingMovie}/>)}
                        </article>
                    </section>
                </div>

                
            </React.Fragment>
        )
    }
}

export default Home;
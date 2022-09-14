import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'
import Formulario from '../Componentes/Formulario/Formulario';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor() {
    super();
    this.state = {
        moviesPopular: [],
        upcomingMovies: [],
        loader: true
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

                
                <div className='buscador'>
                <Formulario/>
                <Link to='/searchresults'><button className="boton-buscar"onClick={()=> this.searchresults()}>Search</button></Link>
                </div>

                {/* {this.state.loading == true ?
                    <div className="spinner"></div>} */}

                <h1 className="tituloPrincipal">Popular Movies</h1>
                <section className="peliculasSeries peliculasP">
                        {this.state.moviesPopular.map((oneMovie, idx) => <CardMovie key = {oneMovie + idx} movieData = {oneMovie}/>)}
                </section>

               <Link to='/popularmovies' className="link"> <button className="boton-vermas-home"> See all popular movies</button></Link>

                <h1 className="tituloPrincipal">Upcoming Movies</h1>
                    <section className="peliculasSeries peliculasP">
                            {this.state.upcomingMovies.map((oneMovie, idx) => <CardMovie key ={ oneMovie + idx} movieData = {oneMovie}/>)}
                    </section>
                
                   <Link to ='/upcomingmovies'> <button className="boton-vermas-home"> See all upcoming movies</button></Link>

                
                
            </React.Fragment>
        )
    }
}

export default Home;
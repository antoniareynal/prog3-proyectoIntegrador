import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFav: []
        }
    }
    componenDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            favoritos = JSON.parse(recuperoStorage)
            console.log('favoritos');
            let peliculasFav = []
            favoritos.forEach(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
                    .then(response => response.json())
                    .then(data => peliculasFav.push(data))
                    console.log('peliculasFav')
                    .catch(error => console.log(error))
                    
            })}
    }

    render() {
            return ( 
            <React.Fragment>
                <h1 className = "tituloPrincipal" > This are your favorite movies: </h1> 
                <section className = "peliculasSeries peliculasFav resultadosBusqueda" > 
                    {this.state.peliculasFav.map((oneMovie, idx) => < CardMovie key = {oneMovie + idx} movieData = {oneMovie}/>)} 
                </section> 
            </React.Fragment>
                    )
            }

    }

export default Favoritos
import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie'

class Favoritos extends Component {
    constructor() {
        super();
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
            let peliculasFavoritas = []
            favoritos.forEach(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
                    .then(response => response.json())
                    .then(data => peliculasFavoritas.push(data))
                    .then(()=> this.setState(
                        {peliculasFav: peliculasFavoritas}
                    ))
                    console.log('peliculasFav')
                    .catch(error => console.log(error))
                    
            })}
    };

    agregarYQuitarDeFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

    
        if(favoritos.includes(id)){ 
            favoritos = favoritos.filter(unId => unId !== id);
            this.setState({
                favsMessage: '/img/favorite.png'
            })
        } else {
            favoritos.push(id);
            this.setState({
                favsMessage: '/img/favorite2.png'
            })
        }

        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(favoritos);
    }

    render() {
        console.log(this.state.peliculasFav)
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

export default Favoritos;
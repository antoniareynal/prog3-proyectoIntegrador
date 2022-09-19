import React, {Component} from 'react';
import CardFavoritos from '../Componentes/CardFavoritos/CardFavoritos'

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            peliculasFav: [],
        }
    }
    componentDidMount() {
        
        let favoritosToArray;
        let recuperoStorage = localStorage.getItem('favoritos');

        
        if (recuperoStorage !== null) {
            favoritosToArray = JSON.parse(recuperoStorage)
            let peliculasFavoritas = [];
            favoritosToArray.forEach(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
                    .then(response => response.json())
                    .then(data => peliculasFavoritas.push(data))
                    .then(()=> this.setState(
                        {peliculasFav: peliculasFavoritas}
                    ))
                    .catch(error => console.log(error))
            })} 
        };

    borrar(id){
        let peliculasFiltradas = this.state.peliculasFav.filter(oneMovie => oneMovie.id !== id);
        this.setState({
         peliculasFav: peliculasFiltradas
        })
     }


    render() {
        console.log(this.state.storage)
        return(
            <React.Fragment>

    
                <h1 className = "tituloPrincipal" > This are your favorite movies: </h1>
                <section className = "peliculasSeries peliculasFav resultadosBusqueda" >
                    {this.state.peliculasFav.map((oneMovie, idx) => < CardFavoritos key = {oneMovie + idx} movieData = {oneMovie} borrar={(id)=>this.borrar(id)}/>)}

                </section> 
    
            </React.Fragment>
        )
    }

}

export default Favoritos;
import React, {Component} from 'react';
import CardMovieBusqueda from "../Componentes/CardMovieBusqueda/CardMovieBusqueda"
import Formulario from "../Componentes/Formulario/Formulario";

class Results extends Component{
    constructor(props){
        super(props)
        this.state = {
            moviesFound: [],
            search: this.props.match.params.title,
            loading: true
        }
    };  

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&query=${this.props.match.params.title}`)
            .then(res => res.json())
            .then(data => this.setState({moviesFound: data.results, loading: false}))
            .catch()
    };

    componentDidUpdate() {
        if (this.state.search !== this.props.match.params.title) {
            //Buscamos los datos de las peliculas//
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&query=${this.props.match.params.title}`)
                .then(res => res.json())
                .then(data => this.setState({
                    moviesFound: data.results,
                    search: this.props.match.params.title,
                    loading: false
                }))
                .catch()
        }

        return
    };

    render(){
        console.log(this.state.moviesFound);
        return(
            <React.Fragment>
                <Formulario/>
                {
                    this.state.loading ?
                    <h1 className="tituloPrincipal">Loading</h1>
                    :
                    <>
                    <h1 className="tituloPrincipal">Search results</h1>
                    <section className="peliculasSeries peliculasP">
                        {
                            this.state.moviesFound.length !== 0 ?
                            this.state.moviesFound.map((oneMovie, idx) => <CardMovieBusqueda key={oneMovie.title + idx} dataMoviesFound={oneMovie}/>)
                            :
                            <h1 className="tituloPrincipal">No results found</h1>
                        }
                    </section>
                    </>
                }
            </React.Fragment>
        )
    }
}

export default Results;
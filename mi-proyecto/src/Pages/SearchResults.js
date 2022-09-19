import React, {Component} from 'react';
import CardMovieBusqueda from "../Componentes/CardMovieBusqueda/CardMovieBusqueda"
import Formulario from "../Componentes/Formulario/Formulario";

class Results extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataMoviesFound: [],
            search: this.props.match.params.title,
            loader: true
        }
    };  

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&query=${this.state.search}&page=1&include_adult=true`)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    dataMoviesFound: data.results, 
                    loader: false
                }
            ))
            .catch(error => console.log(error));
    };

    componentDidUpdate() {
        if (this.state.search !== this.props.match.params.title) {
            //Buscamos los datos de las peliculas//
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&query=${this.props.match.params.title}&page=1&include_adult=true`)
                .then(res => res.json())
                .then(data => this.setState({
                    dataMoviesFound: data.results,
                    search: this.props.match.params.title,
                    loader: false
                }))
                .catch()
        }

        return
    };

    render(){
        console.log(this.state.dataMoviesFound);
        return(
            <React.Fragment>
                <div className='buscador-home'>
                <Formulario/>
                </div>
                {
                    this.state.loader?
                    <div className="lds-dual-ring"></div>
                    :
                    <>
                    <h1 className="tituloPrincipal">Search results</h1>
                    <section className="peliculasSeries peliculasP">
                        {
                            this.state.dataMoviesFound.length !== 0 ?
                            this.state.dataMoviesFound.map((oneMovie, idx) => <CardMovieBusqueda key={oneMovie.title + idx} dataMoviesFound={oneMovie}/>)
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
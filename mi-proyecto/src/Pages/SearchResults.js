import React, {Component} from 'react';
import CardMovie from '../Componentes/CardMovie/CardMovie';
import Formulario from "../Componentes/Formulario/Formulario";

class Results extends Component{
    constructor(props){
        super(props)
        this.state = {
            moviesFound: "",
            search: this.props.match.params.title,
            loading: true
        }
    };  

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${this.state.search}&page=1&include_adult=true`)
            .then(res => res.json())
            .then(data => this.setState({moviesFound: data.results, loading: false}))
            .catch()
    };

    componentDidUpdate(){
        if(this.state.search !== this.props.match.params.title){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${this.props.match.params.title}&page=1&include_adult=true`)
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
                    <h1>Loading</h1>
                    :
                    <>
                    <h1>Search results</h1>
                    <section>
                        {
                            this.state.moviesFound.length !== 0 ?
                            this.state.moviesFound.map((oneMovie, idx) => <CardMovie key={oneMovie.title + idx} dataMoviesFound={oneMovie}/>)
                            :
                            <h1>No results found</h1>
                        }
                    </section>
                    </>
                }
            </React.Fragment>
        )
    }
}

export default Results;
import React, {Component} from 'react';
import CardDetail from '../Componentes/CardDetail/CardDetail'


class DetailMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movieDetail: []
        }
    };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState(
            {movieDetail: data}
        ))

    }
    
    render(){
        return (
            <React.Fragment>
                <section>
                    <h1 class="tituloPrincipal">Detalle de películas</h1>
                </section>

                <section class="peliculasSeriesDetalle">
                    {this.state.movieDetail.map((detail, idx) => <CardDetail key ={ detail + idx} detailData = {detail}/>)}
                </section> 
           </React.Fragment>
        )
    }
}

export default DetailMovie;
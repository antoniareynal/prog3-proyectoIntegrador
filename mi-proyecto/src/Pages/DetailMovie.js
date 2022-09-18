import React, {Component} from 'react';



class DetailMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movieDetail: {},
            favsMessage: '',
            loader: true
        }
    };

    componentDidMount(id){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState(
            {movieDetail: data}
        ))
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage.includes(this.state.id)){
            this.setState({
                favsMessage: '/img/favorite2.png'
            })
        }
        else{
            this.setState({
                favsMessage: '/img/favorite.png'
        })}

    }
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

        console.log(localStorage);
    }
    render(){
        console.log(this.state.movieDetail);
        console.log(this.props.match.params.id);
        return (
            
                this.state.movieDetail.genres === undefined ?
                <p> Cargando... </p> :
                
                <React.Fragment>
                    <section>
                        <h1 className="tituloPrincipal">Detail Movie</h1>
                    </section>

                    <section className="peliculasSeriesDetalle">
                    <article className="photo-container">
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.movieDetail.poster_path}`} alt="" className="fotoDetail" />
                    </article>
                    <article className="datos">
                        <h3 className="tituloDetail">{this.state.movieDetail.title}</h3>
                        
                        <hr className="linea" />
                        <p className="rating" >Rating: {this.state.movieDetail.vote_average} </p>
                        <hr className="linea" />
                        <p className="first_air_date"> Realese date: {this.state.movieDetail.release_date}</p>
                        <hr className="linea" />
                        <p className="duracion"> Duration: {this.state.movieDetail.runtime} min</p>
                        <hr className="linea" />
                        <p className="genero"> Genre: {this.state.movieDetail.genres[0].name}</p>
                        <hr className="linea"/>
                        <p className="overview">{this.state.movieDetail.overview} </p>
                        <button className ="boton-fav" onClick={()=>this.agregarYQuitarDeFavoritos(this.state.movieDetail.id)}><img className="fotoFav" src ={this.state.favsMessage} alt='foto-fav'/></button>
                    </article>
                    </section>
                </React.Fragment>
            
        )
    }
}

export default DetailMovie;
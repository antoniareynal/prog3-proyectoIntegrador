import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class CardFavoritos extends Component{
    constructor(props){
    super(props);
    this.state={
        verMas: false,
        favsMessage: '/img/favorite.png',
        
    }}

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if(favoritos.includes(this.props.movieData.id)){
            this.setState({
                favsMessage: '/img/favorite2.png'
            })
        }}

    QuitarDeFavoritos(id){
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

    }
    showCard(){
        this.setState({
            verMas: !this.state.verMas
        })
    }


    render(){
        return (
            <React.Fragment>
                
                    <article>
                    <Link to={`/detail/id/${this.props.movieData.id}`} className='linkTo'>
                    <h3>{this.props.movieData.title}</h3>
        
                    <div className="photo-container">
                        <img src={`https://image.tmdb.org/t/p/w500/${this.props.movieData.poster_path}`} alt=""/>
                    </div>
                    </Link>
                    <p>{this.props.movieData.release_date}</p>
                    <button className="boton-fav"onClick = {() => this.showCard()}><img className= "fotoMas" src='/img/plus.png' alt='foto-mas'/></button>
                    {
                        this.state.verMas ?
                        <p>{this.props.movieData.overview}</p>
                        :
                        <></>
                    }
                    <button className ="boton-fav" onClick={()=>{this.QuitarDeFavoritos(this.props.movieData.id);this.props.borrar(this.props.movieData.id)}}><img className="fotoFav" src ={this.state.favsMessage} alt='boton-mas'/></button>
                    
                </article>
              
            </React.Fragment>
        )
    }

}

export default CardFavoritos;

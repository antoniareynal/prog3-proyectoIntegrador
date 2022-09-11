import React, {Component} from 'react';



class CardUpcoming extends Component{
    constructor(props){
    super(props);
    this.state={
        valor: [],
        verMas: false,
        favsMessage: 'Add to favorites',

    }
    }

    agregarYQuitarDeFavoritos(id){
        //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
        // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if(favoritos.includes(id)){ //includes retorna un booleano.
            favoritos = favoritos.filter(unId => unId !== id);
            //mostar al usuario un nuevo texto: agregar a favoritos
            this.setState({
                favsMessage: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            //mostar un texto diferente al usuario. Quitar de favs
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);
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
                <h3>{this.props.upcomingData.title}</h3>
                    <div className="photo-container">
                        <img src={`https://image.tmdb.org/t/p/w200/${this.props.upcomingData.poster_path}`} alt=""/>
                    </div>
                    <p>{this.props.upcomingData.release_date}</p>
                    <button className="boton-home"onClick = {() => this.showCard()}><i className="fas fa-plus-circle">Description</i></button>
                    {
                        this.state.verMas ?
                        <p>{this.props.upcomingData.overview}</p>
                        :
                        <></>
                    }
                    <br></br>
                    <button className ="boton-home"onClick={()=>this.agregarYQuitarDeFavoritos(this.props.upcomingData.id)}><i className="fas fa-plus-circle">{this.state.favsMessage}</i></button>

                    </article>

                
            </React.Fragment>
        )
    }

}

export default CardUpcoming;
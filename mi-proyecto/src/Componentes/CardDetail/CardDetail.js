import React, { Component } from 'react';


class CardDetail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment> 
                <article class="photo-container">
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.detailData.poster_path}`} alt="" className="fotoDetail" />
                </article>
                <article className="datos">
                    <h3 className="tituloDetail">{this.props.detailData.original_title}</h3>
                    <hr className="linea" />
                    <p className="rating">{this.props.detailData.vote_average} </p>
                    <hr className="linea" />
                    <p className="first_air_date">{this.props.detailData.release_date}</p>
                    <hr className="linea" />
                    <p className="duracion"> </p>
                    <hr className="linea" />
                    <a href="./detailGenres.html" class="linkeado"><p class="genero"> Género: {this.props.detailData.genres}</p></a>
                    <hr className="linea"/>
                        <p className="overview">{this.props.detailData.overview} </p>
                        <hr className="linea"/>
                            <p><a href="./favorite.html" ><button type="button" class="agregarFavoritos">Agregar a favoritos</button></a></p>
                </article>
            </React.Fragment>
        )
    }
   
}

export default CardDetail;
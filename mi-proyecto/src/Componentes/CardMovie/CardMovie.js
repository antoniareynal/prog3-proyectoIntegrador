import React, {Component} from 'react';

class CardMovie extends Component{
    constructor(props){
    super(props);
    this.state={
        valor: [],
        verMas: false

    }
    }

    showCard(){
        this.setState({
            verMas: !this.state.verMas
        })
    }

    render(){
        return (
            <React.Fragment>
                <h3>{this.props.movieData.title}</h3>
                    <div className="photo-container">
                        <a href="./detailMovie.html"><img src={this.props.movieData.poster_path} alt="Sponge Bob"/></a>
                    </div>
                    <p>{this.props.movieData.release_date}</p>
            </React.Fragment>
        )
    }

}

export default CardMovie;

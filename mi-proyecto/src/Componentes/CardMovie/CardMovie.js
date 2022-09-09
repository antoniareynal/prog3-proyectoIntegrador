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
                <article>
                    <h3>{this.props.movieData.title}</h3>
                    <div className="photo-container">
                        <img src={`https://image.tmdb.org/t/p/w200/${this.props.movieData.poster_path}`} alt=""/>
                    </div>
                    <p>{this.props.movieData.release_date}</p>
                    <button onClick = {() => this.showCard()}><i className="fas fa-plus-circle">See more</i></button>
                    {
                        this.state.verMas ?
                        <p>{this.props.movieData.overview}</p>
                        :
                        <></>
                    }

                </article>
            </React.Fragment>
        )
    }

}

export default CardMovie;

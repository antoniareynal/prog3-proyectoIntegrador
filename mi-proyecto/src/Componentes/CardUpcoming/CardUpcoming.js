import React, {Component} from 'react';



class CardUpcoming extends Component{
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
                
                <h3>{this.props.dataUpcoming.title}</h3>
                    <div className="photo-container">
                        <img src={`https://image.tmdb.org/t/p/w200/${this.props.dataUpcoming.poster_path}`} alt=""/>
                    </div>
                    <p>{this.props.dataUpcoming.release_date}</p>
                    
            </React.Fragment>
        )
    }

}

export default CardUpcoming;
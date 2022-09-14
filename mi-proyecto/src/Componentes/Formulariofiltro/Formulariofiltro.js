import React, { Component } from 'react';

class Formulariofiltro extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        };
    };

evitarSubmit(event){
    event.preventDefault();
};

guardarCambios(event){
    this.setState({
        value: event.target.value
    }, ()=> this.props.filtrarPeliculas(this.state.value)
    )
};

render(){
    return(
    <form onSubmit={(event)=>this.evitarSubmit(event)}>
        <input type='text' placeholder='Search' onChange={(event) => this.guardarCambios(event)} value={this.state.value}/>
    </form>)
};
}

export default Formulariofiltro
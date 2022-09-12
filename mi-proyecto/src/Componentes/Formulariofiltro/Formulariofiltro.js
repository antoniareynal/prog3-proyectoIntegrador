import React, { Component } from 'react';

class Formulariofiltro extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: ''
        };
    };

evitarSubmit(event){
    event.preventDefault();
};

guardarCambios(event){
    this.setState({
        input: event.target.value
    })
};

render(){
    return(
    <form onSubmit={(e)=>this.evitarSubmit(e)}>
        <input type='text' placeholder='Search' onChange={(e) => this.guardarCambios(e)} value={this.state.input}/>
    </form>)
};
}

export default Formulariofiltro
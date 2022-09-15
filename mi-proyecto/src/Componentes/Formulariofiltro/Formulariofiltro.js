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
    <form onSubmit={(event)=>this.evitarSubmit(event)} className='buscador'>
        <input type='text' placeholder='Filter' onChange={(event) => this.guardarCambios(event)} value={this.state.value}/>
        <button type='submit'><i className="fa fa-search"></i></button>
    </form>)
};
}

export default Formulariofiltro
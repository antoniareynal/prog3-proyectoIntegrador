import React, { Component } from 'react';

class Formulario extends Component {
    super(){
        this.state = {
            valor: ''
        };
    };

prevenirRecarga(event){
    event.preventDefault();
};

guardarCambios(event){
    this.setState({valor: event.target.value}, () => this.props.filtro(this.state.valor))
};

render(){
    <form onSubmit={(e) => this.evitarRecarga(e)}>
    <input type={'text'} onChange={(e) => this.guardarCambios(e)} value={this.state.valor}/>
    </form>
};
}

export default Formulariofiltro
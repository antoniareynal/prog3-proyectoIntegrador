import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarSubmit(evento){
        this.setState({
            value: evento.target.value,}, ()=>this.props.filtrarPelicular(this.state.value))
    }

    render(){
        return(
            <form onSubmit={(evento)=>this.evitarSubmit(evento)} className='mb-4'>
                <input onChange={(evento)=>this.obtenerDatos(evento)} type="text" name="usuario" value={this.state.value}/>
            </form>
        )
    }
}

export default Form;
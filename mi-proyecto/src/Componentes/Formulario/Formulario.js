import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarSubmit(event){ // detiene el envío del formulario usando preventDefault
        event.preventDefault(); 
    }

    obtenerDatos(event){ // Obtiene el valor ingresado en el input por el usuario y actualizará el estado interno del componente
        this.setState({value: event.target.value}, // Target identifica al campo objetivo del evento y la propiedad value obtiene el valor ingresado
          ()=> console.log(this.state.value))
    }

    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)} className='buscador'> {/* Definimos el evento onSubmit que ejecutará la función evitarSubmit(event) */}
                <input onChange={(event)=>this.obtenerDatos(event)} type="text" placeholder='Movie' value={this.state.value}/> 

            {
                this.state.value ?
                    <Link to={`/searchresults/${this.state.value}`}>
                        <input type='submit' value='submit' />
                    </Link>
                    :<input type='submit' value='submit' />
            }
                
                {/* Definimos el evento onChange que ejecutará la función obtenerDatos(evento) para obtener la información que el usuario ingresa en el campo */}
            </form>
        )
    }
}

export default Formulario;
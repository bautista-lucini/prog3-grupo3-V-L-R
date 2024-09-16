import React from 'react';
import {Component} from "react";


class Buscador extends Component {
    constructor(props){

        super(props);

        this.state={
            search: '',
        }
    }

    evitarRecarga(e){
        e.preventDefault();
    }            
    
    guardarCambios(e){
       this.setState({
        search:e.target.value
       })
    }


    render(){
        return(
            <form onSubmit= {(e)=> this.evitarRecarga(e)}>
                <input onChange={(e)=>this.guardarCambios(e)} type="text" name="usuario" value={this.state.value}></input>
            </form>
        )
    }
    

}


export default Buscador

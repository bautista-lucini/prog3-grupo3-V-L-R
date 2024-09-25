import React from 'react';
import { Component } from "react";
import "./Buscador.css"


class Buscador extends Component {
    constructor(props){

        super(props)
        this.state={
            query: '',
        }
    }

    // evitarRecarga(e){
    //     e.preventDefault();
    // }            
    
    guardarCambios(e){
       this.setState({
            query: e.target.value
       })
    }

    handleInputSubmit(){
        this.props.history.push("/search", {query: this.state.query})
    }


    render(){
        return(
            <div className='buscador'>
            
                <input onChange= {(e) => this.guardarCambios(e)} type= "text" name="query" value={this.state.query}/>
                <button onClick={() => this.handleInputSubmit()}> Buscar pelicula</button>
            </div>
            // <form onSubmit= {(e)=> this.evitarRecarga(e)}>
            //     <input onChange={(e)=>this.guardarCambios(e)} type="text" name="usuario" value={this.state.value}></input>
            // </form>
        )
    }
    

}


export default Buscador

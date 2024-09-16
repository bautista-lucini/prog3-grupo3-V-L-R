import React, { Component } from 'react'

export class ResultadosBuscador extends Component {
  
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        //fetch
        fetch ("compeltar")
        .then()
        .then()
        .catch()
    }
  
    render() {
        return (
            <div> Resultados de Busqueda: {this.props.location.state.query}</div>
    )
  }
}

export default ResultadosBuscador;

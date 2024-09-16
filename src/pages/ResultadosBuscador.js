import React, { Component } from 'react'

export class ResultadosBuscador extends Component {
  
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        console.log("val",this.props.location.state.query)
    }
  
    render() {
        return (
            <div> Resultados de Busqueda: {this.props.location.state.query}</div>
    )
  }
}

export default ResultadosBuscador

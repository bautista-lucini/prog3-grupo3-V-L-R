import React , {Component } from "react"

class FormFiltro extends Component { 
    constructor(props){
        super(props)
        this.state={
            input: ""
        }
    }

    prevenir(evento){
        evento.preventDefault()
    }

    getDataForm(evento){
        this.setState({
            input: evento.target.value,
        },

        ()=> this.props.filtrado(this.state.value)

    
    )
    }

    render(){
       return(
        <form onSubmit={(evento)=> this.prevenir(evento)}>
            <input  onChange={(evento)=> this.getDataForm(evento)}  value={this.state.input} name="formfiltro" type="text"></input>    
        </form>
       )
    }



}

export default FormFiltro
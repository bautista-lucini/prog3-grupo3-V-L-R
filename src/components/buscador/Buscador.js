import React from 'react'

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

    

}


export default Buscador

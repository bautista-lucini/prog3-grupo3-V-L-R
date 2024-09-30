import React, { Component } from 'react';
import DetallePelicula from '../components/DetallePelicula/DetallePelicula.js';

class DetallePeliculaPage extends Component {

    render() {
        const { match } = this.props;
        return (
            <div>
                <DetallePelicula id={match.params.id} /> 
            </div>
        );
    }
}

export default DetallePeliculaPage;

import { Component } from "react";
// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFavorito: false,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            const estaEnFavoritos = parsedArray.includes(this.props.movie.id);
            this.setState({
                esFavorito: estaEnFavoritos
            });
        }
    }

    agregarFavorito = () => {
        const storage = localStorage.getItem("favoritos");
        let parsedArray = [];

        if (storage !== null) {
            parsedArray = JSON.parse(storage);
        }

        parsedArray.push(this.props.movie.id);
        const stringArray = JSON.stringify(parsedArray);
        localStorage.setItem("favoritos", stringArray);

        this.setState({
            esFavorito: true
        });
    };

    sacarFavorito = () => {
        const storage = localStorage.getItem("favoritos");
        let parsedArray = [];

        if (storage !== null) {
            parsedArray = JSON.parse(storage);
        }

        const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id);
        const stringArray = JSON.stringify(favoritosRestantes);
        localStorage.setItem("favoritos", stringArray);

        this.setState({
            esFavorito: false
        });
    };

    render() {
        return (
            <div>
                <button onClick={() => this.state.esFavorito ? this.sacarFavorito() : this.agregarFavorito() }>
                    {/* {this.state.esFavorito ? <FaHeart size={20} /> : <FaRegHeart />} */}
                </button>
            </div>
        );
    }
}

export default Favoritos;

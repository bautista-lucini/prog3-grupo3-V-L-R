
/*
import React from 'react'

class Favoritos extends Component{

  constructor(props){
    super(props)
    this.state({
      movies: [],
      isLoading: true
    })
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })
    const parsedArray = JSON.parse(storage)
    Promise.all(
     parsedArray.map((id)=> {
       fetch("URL de movie")
       .then(response => response.json())
       .then(data => 
         this.setState({
           movies: [...this.state.movies, movie]

          })
        )
     })
    )
    this.setState({
      isLoading: false
    })
  }

  render(){
    return(
      <div>{!this.state.isLoading ? <p>GRILLA</p> : <p>Loading...</p>

      }</div>
    )
  }

}

export default Favoritos
*/
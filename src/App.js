// function App() {
//   const saludo = "Hola React"
//   const alumnos = [ "Mike", "Robert", "Susan"]
//   return (
//     <div>
//        <p> {saludo}</p>

//        <ul>
//         {
//           alumnos.map(alumno => <li> {alumno}</li>)
//         }
//        </ul>
//     </div>
//   );
// }

// export default App;

function App() {
  const nombre = "Victoria"
  const peliculas = [ "The Last Song", "Avatar", "Cars"]
  return (
    <div>
       <h1> Mi primera app en react</h1>
       <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" />
       <p> Mi nombre es {nombre} </p>

       <h2> Las ultimas 3 peliculas que vi son: </h2>
       <ul>
        {
          peliculas.map(pelicula => <li> {pelicula}</li>)
        }
       </ul>
    </div>
  );
}

export default App;


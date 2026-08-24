import MovieCard from "./Components/MovieCard"

function App() {


 return (
  <>
    <MovieCard movie={{title: "Iron Man" , release_year: 2008 , rate : "8/10"}}/>
    <MovieCard movie={{title: "DeadPool" , release_year: 2009 , rate : "7/10"}}/>
    <MovieCard movie={{title: "Cars" , release_year: 2008 , rate : "8/10"}}/>
  </>
  )
}

export default App

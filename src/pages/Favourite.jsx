import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../Components/MovieCard";

function Favourite(){

    const {favouriteMovies} = useMovieContext();

    return (
        <div className="movie-collection">
                {favouriteMovies.map((
                    movie) =>(
                       <MovieCard movie={movie} key={movie.id} />))
                }
             </div>
    )
}

export default Favourite
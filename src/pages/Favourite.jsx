import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../Components/MovieCard";

function Favourite(){

    const {favouriteMovies} = useMovieContext();

    return (
        <div className="movie-collection flex gap-[5vw] flex-wrap justify-center">
                {favouriteMovies.map((
                    movie) =>(
                       <MovieCard movie={movie} key={movie.id} />))
                }
             </div>
    )
}

export default Favourite
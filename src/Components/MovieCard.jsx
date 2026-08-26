import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";


function MovieCard({movie}){

    const movieID = movie.id;
    const movieTitle = movie.title;
    const movieReleaseYear = movie.release_date;
    const movieImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [isFavourite, setIsFavourite] = useState(false);
    const {addFavMovie,removeFavMovie} = useMovieContext();

    function onFavouriteHandler(){
        setIsFavourite(!isFavourite);
        if(!isFavourite)
            return addFavMovie(movie)
        else
            return removeFavMovie(movie.id)
    }

    return (
        <div className="movie-card">
            <div className="movie-banner">
                <img src={movieImage} alt={movieTitle} />
                <div className="movie-overlay">
                    <button onClick={onFavouriteHandler}>{isFavourite ? "❤️": "🤍"}</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movieTitle}</h3>
                <p>{movieReleaseYear}</p>
            </div>
        </div>
    )

}


export default MovieCard
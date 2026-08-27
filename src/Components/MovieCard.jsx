import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";


function MovieCard({movie}){

    const movieID = movie.id;
    const movieTitle = movie.title;
    const movieReleaseYear = movie.release_date;
    const movieImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const {addFavMovie,removeFavMovie,isFavourite} = useMovieContext();
    const favourite = isFavourite(movie.id);


    // -> send .this movie id to check is that a fav movie or not. if it favouriteMovies it will return "true";

    function onFavouriteHandler(e){
        e.preventDefault()
        if(favourite) removeFavMovie(movie.id)      // ->> if it true already in the fav movies, need to remove it from their
        else addFavMovie(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-banner">
                <img src={movieImage} alt={movieTitle} />
                <div className="movie-overlay">
                    <button onClick={(e)=>onFavouriteHandler(e)}>{ favourite? "❤️": "🤍"}</button>
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
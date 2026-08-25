


function MovieCard({movie}){

    const movieTitle = movie.title;
    const movieReleaseYear = movie.release_date;
    const movieImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    function onFavouriteHandler(){

    }

    return (
        <div className="movie-card">
            <div className="movie-banner">
                <img src={movieImage} alt={movieTitle} />
                <div className="movie-overlay">
                    <button onClick={onFavouriteHandler}>🤍</button>
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
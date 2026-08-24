


function MovieCard({movie}){

    const movieTitle = movie.title;
    const movieReleaseYear = movie.release_year;
    const movieRate = movie.rate;

    function onFavouriteHandler(){

    }

    return (
        <div className="movie-card">
            <div className="movie-banner">
                <img src="https://placehold.co/100" alt={movieTitle} />
                <div className="movie-overlay">
                    <button onClick={onFavouriteHandler}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movieTitle}</h3>
                <p>{movieReleaseYear}</p>
                <p>{movieRate}</p>
            </div>
        </div>
    )

}

export default MovieCard
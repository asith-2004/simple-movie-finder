import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();        // create the context box

// const {addFavMovie,removeFavMovie,isFavourite} = useMovieContext();
export const useMovieContext = ()=> useContext(MovieContext);   

export function MovieProvider({children}){


    // ->> everytime when this page loading this should excute for one time,, 
    // ->> if there is some fav movies on "favouriteMovies" file, it will pass to the favouriteMovies.
    const [favouriteMovies, setFavouriteMovies] = useState(()=>
    {
        const loadMovie = localStorage.getItem("favouriteMovies");
        return loadMovie ? JSON.parse(loadMovie) : [];
    });


    /* ->> if favouriteMovies changed/modified, every time localstorage should be update...

        this will trigger ->>> addFavMovie() , removeFavMovie()
    */
    useEffect(()=>{
        localStorage.setItem("favouriteMovies",JSON.stringify(favouriteMovies));
    },[favouriteMovies]);

    const addFavMovie = (movie)=>{
        setFavouriteMovies(m =>([...m,movie]));
    }

    const removeFavMovie = (movieID)=>{
        setFavouriteMovies(favouriteMovies.filter(movie=> movie.id !== movieID));
    }

    const isFavourite = (movieId)=> favouriteMovies.some(movie=> movie.id === movieId);

    return(
        <MovieContext.Provider 
            value={{favouriteMovies,addFavMovie,removeFavMovie,isFavourite}}>
            {children}
        </MovieContext.Provider>
    );
}
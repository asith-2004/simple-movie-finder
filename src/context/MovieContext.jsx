import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export function MovieProvider({children}){

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    useEffect(()=>{
        const savedFavMovieList = localStorage.getItem("favouriteMovies");
        if (savedFavMovieList) setFavouriteMovies(JSON.parse(savedFavMovieList));
    },[])

    const addFavMovie = (movie)=>{
        setFavouriteMovies(m =>([...m,movie]));
        localStorage.setItem("favouriteMovies",JSON.stringify(favouriteMovies));
    }

    const removeFavMovie = (movieID)=>{
        setFavouriteMovies(favouriteMovies.filter(movie=> movieID !== movie.id));
        localStorage.setItem(JSON.stringify("favouriteMovies",JSON.stringify(favouriteMovies)));
    }

    return(
        <MovieContext.Provider 
            value={{favouriteMovies,addFavMovie,removeFavMovie,}}>
            {children}
        </MovieContext.Provider>
    );
}
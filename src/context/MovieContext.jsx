import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export function MovieProvider({children}){

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    useEffect(()=>{
        const savedFavMovieList = localStorage.getItem("favouriteMovies");
        if (savedFavMovieList) setFavouriteMovies(JSON.parse(savedFavMovieList));
    },[])

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
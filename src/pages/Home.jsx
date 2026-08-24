import MovieCard from "../Components/MovieCard";
import React, {useState} from "react";

function Home(){

    const [movies, setMovies] = useState([{title: "Iron Man" , release_year: 2008 , rate : "8/10"},
                                                            {title: "DeadPool" , release_year: 2009 , rate : "7/10"},
                                                            {title: "Cars" , release_year: 2008 , rate : "8/10"}]);

    //const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");


    
    function onSearchChange(event){
        setSearchQuery(() => event.target.value);
    }

    // function onSearchClick(){
    //     searchedInput = searchInput;
    //     setSearchInput("");
    //     console.log("searched :" + searchedInput)
    // }

    const handleSearch = (e)=>{
        e.preventDefault();         //to stop refresh the page
        setSearchQuery(searchQuery);
        console.log("searched : " + searchQuery)
        setSearchQuery("");
    };

    return (

        <div className="home-container">

            <form className="search-movie-input" onSubmit={handleSearch}>
                <input type="text" onChange={onSearchChange} value={searchQuery}/>
                <button className="search-button" type="submit" onClick={handleSearch}>Search</button> 
            </form>
             
             <div className="movie-collection">
                {movies.map((
                    movie,index) =>(
                        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={index} />
                ))
                }
             </div>
        </div>
    )
}

export default Home
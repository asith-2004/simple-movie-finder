import MovieCard from "../Components/MovieCard";
import {useState, useEffect} from "react";
import { searchMovies, getMovieList } from "../services/api";

function Home(){

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [error,setError]= useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

//  -> Try to load movies - render only one time 
    useEffect(()=>{
        const loadMovies = async ()=> {

            try{                         
                const movieList = await getMovieList();
                setMovies(movieList);
                 
            } catch(err){
                console.error(err);
                setError("Failed to Load...")
            } finally{
                setIsLoading(false);
            }
        }
        loadMovies()
    
    },[]);

    
    function onSearchChange(event){
        setSearchQuery(() => event.target.value);
    }

    // function onSearchClick(){
    //     searchedInput = searchInput;
    //     setSearchInput("");
    //     console.log("searched :" + searchedInput)
    // }

    const handleSearch = (e)=>{
        e.preventDefault();         // -> to stop refresh the page 
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
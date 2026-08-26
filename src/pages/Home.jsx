import MovieCard from "../Components/MovieCard";
import {useState, useEffect} from "react";
import { searchMovies, getMovieList } from "../services/api";



function Home(){

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [error,setError]= useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [clearInput, setClearInput] = useState("");
    
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

    const onSearchClick =async (e)=>{
        e.preventDefault();         // -> to stop refresh the page 

        if (!searchQuery) return false;
        if (isLoading) return false;



        setIsLoading(true);
        try{
            const movie = await searchMovies(searchQuery);

            setSearchQuery(movie);
            
        } catch(error){
            console.error(error);
            setError("Could not Fetch...")

        }
        finally{
            setIsLoading(false);
            setClearInput("");
        }

       
    };

    return (

        <div className="home-container">

            <form className="search-movie-input">
                <input type="text" onChange={onSearchChange} value={clearInput}/>
                <button className="search-button" type="submit" onClick={(e)=>onSearchClick(e)}>Search</button> 
            </form>
             
             <div className="movie-collection">
                {movies.map((
                    movie) =>(
                        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))
                }
             </div>
        </div>
    )
}

export default Home
import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { getMovieList } from "../services/api";

function Home() {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState("");

    //  -> Try to load movies - render only one time 
    useEffect(() => {
        const loadMovies = async () => {

            try {
                const movieList = await getMovieList();
                setMovies(movieList);

            } catch (err) {
                console.error(err);
                setError("Failed to Load...")
            } finally {
                setIsLoading(false);
            }
        }
        loadMovies()
    }, []);


    function onSearchChange(event) {
        setInput(() => event.target.value)
        // setSearchQuery(()=>input);
    }


    const onSearchClick = async (e) => {
        e.preventDefault();         // -> to stop refresh the page 

        if (!input) return false;
        if (isLoading) return false;

        setIsLoading(true);
        try {
            setSearchQuery(input)

        } catch (error) {
            console.error(error);
            setError("Could not Fetch...")
        }
        finally {
            setIsLoading(false);
            setInput("");
        }
    };


    return (
        <>
            {isLoading ? <p>loading</p> :

                <div className="home-container flex flex-col">
                    <form className="search-movie-input flex w-full max-w-xl mx-auto bg-white rounded-full my-6 justify-center " >
                        <input placeholder="Search for movie..." className="rounded-full w-full h-12 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" value={input} onChange={onSearchChange} />

                        <button onClick={onSearchClick} className="relative rounded-4xl bg-blue-500 right-20 text-white shadow-xs font-medium text-sm px-4 py-1 hover:opacity-80 active:opacity-70 ">Search</button>
                    </form>

                    <div className="movie-collection flex gap-[5vw] flex-wrap justify-center">
                        {movies.map((
                            movie) => (
                            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                        ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Home
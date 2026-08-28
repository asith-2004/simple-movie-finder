import { Link } from "react-router-dom"

function NavBar(){

    return (
        <nav className="flex my-4 mx-4">
            <div className="nav-bar flex-1">
                <Link to="/" className="nav-bar-brand">Movie Collection</Link>
            </div>

            <div className="nav-link flex gap-10">
                <Link to="/">Home</Link>
                <Link to="/fav" >Favourite</Link>
            </div>

        </nav>
        
    )
}
export default NavBar
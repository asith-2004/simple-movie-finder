import { Link } from "react-router-dom"

function NavBar(){

    return (
        <nav>
            <div className="nav-bar">
                <Link to="/" className="nav-bar-brand">Movie Collection</Link>
            </div>

            <div className="nav-link">
                <Link to="/" >Home</Link>
                <Link to="/fav" >Favourite</Link>
            </div>

        </nav>
        
    )
}
export default NavBar
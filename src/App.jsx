
import Home from "./pages/Home.jsx"
import Favourite from "./pages/Favourite.jsx"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar.jsx"
import { MovieProvider } from "./context/MovieContext.jsx"

function App() {

 return (
  <div>
      <NavBar />
      <MovieProvider>
          <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fav" element={<Favourite/>} />
      </Routes>
      </MovieProvider>
      
  </div>
    

  )
}

export default App

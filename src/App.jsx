
import Home from "./pages/Home.jsx"
import Favourite from "./pages/Favourite.jsx"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar.jsx"

function App() {

 return (
  <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fav" element={<Favourite/>} />
      </Routes>
  </div>
    

  )
}

export default App

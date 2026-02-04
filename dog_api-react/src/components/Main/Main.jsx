import { Routes, Route } from "react-router-dom"
import SearchBar from "./SearchBar"
import Breed from "../Breed/Breed"

function Main() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Dog API</h1>
            <p>Pesquise a raça de um cachorro</p>
            <SearchBar />
          </>
        }
      />
      <Route path="/breed/:selectedBreed" element={<Breed />} />
    </Routes>
  )
}

export default Main
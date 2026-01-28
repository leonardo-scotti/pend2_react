import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchBar() {
  const navigate = useNavigate()
  const [breed, setBreed] = useState("")

  function handleKeyPress(e) {
    if (e.key === "Enter" && breed.trim() !== "") {
      navigate(`/breed/${breed.toLowerCase()}`)
      setBreed("")
    }
  }

  return (
    <input
      type="search"
      placeholder="Digite a raça do cachorro"
      value={breed}
      onChange={e => setBreed(e.target.value)}
      onKeyDown={handleKeyPress}
      style={{ padding: "5px", fontSize: "16px", width: "250px" }}
    />
  )
}

export default SearchBar
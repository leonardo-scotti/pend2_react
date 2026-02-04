import React from "react"
import Galery from "./Galery"
import styles from "./Breed.module.css"
import { useParams, useNavigate } from "react-router-dom"

function Breed() {
  const { selectedBreed } = useParams()
  const navigate = useNavigate() // <-- hook necessário para navegar

  return (
    <>
      <button onClick={() => navigate("/")}>
        Voltar
      </button>

      <div className={styles.div}>
        <h2>{selectedBreed}</h2>
        <div className="galery" id="galery">
          <Galery breed={selectedBreed} />
        </div>
      </div>
    </>
  )
}

export default Breed
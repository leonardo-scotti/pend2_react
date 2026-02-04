import { useState, useEffect } from "react"

function Galery({ breed }) {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!breed) return

    const fetchImages = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        if (!response.ok) throw new Error("Erro ao buscar imagens")

        const data = await response.json()
        setDogs(data.message)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [breed])

  if (loading)
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Carregando..."
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  )
  if (error) return <p>Erro: {error}</p>
  if (dogs.length === 0) return <p>Nenhuma imagem encontrada.</p>

  return (
    <div style={{ width: "80vw", display: "flex", flexWrap: "wrap", gap: "10px", flexDirection: "row"}}>
      {dogs.slice(0, 50).map((url, index) => (
        <img
          key={index}
          src={url}
          alt={breed}
          style={{ width: "200px", height: "250px", objectFit: "cover", borderRadius: "8px"}}
        />
      ))}
    </div>
  )
}

export default Galery
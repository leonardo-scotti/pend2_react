import { useState, useEffect } from 'react'

function Galery() {
    const [dogs, setDogs] = useState([])      // para armazenar URLs
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchDogs() {
            try {
                const res = await fetch("https://dog.ceo/api/breed/hound/images")
                const data = await res.json()
                setDogs(data.message)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchDogs()
    }, [])

    if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {dogs.slice(0, 50).map((url, index) => (
          <img
            key={index}
            src={url}
            alt="Cachorro"
            style={{ width: "150px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  )
}
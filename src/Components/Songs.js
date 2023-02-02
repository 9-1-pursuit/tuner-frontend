import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Artist from "./Artist"
import ArtistForms from "./ArtistForms"

const API = process.env.REACT_APP_API_URL

export default function Artists() {
  const [artist, setArtist] = useState([])
  const { id } = useParams()

  const handleAddArtist = (newArtist) => {
    axios
      .post(`${API}/artists/${id}/songs`, newArtist)
      .then(
        (response) => {
          setArtist([response.data, ...artist])
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleEditArtist = (updatedArtist) => {
    axios
      .put(`${API}/artists/${id}/songs/${updatedArtist.id}`, updatedArtist)
      .then((response) => {
        const copyofArtist = [...artist]
        const indexUpdatedArtist = copyofArtist.findIndex((artist) => {
          return id === updatedArtist.id
        })
        copyofArtist[indexUpdatedArtist] = response.data
        setArtist(copyofArtist)
      })
      .catch((c) => console.warn("catch", c))
  }

  const handleDeleteArtist = (id) => {
    axios
      .delete(`${API}/artists/${id}/songs/${id}`)
      .then(
        (response) => {
          const copiedArray = [...artist]
          const indexDeletedArtist = copiedArray.filter(
            (artist) => artist.id !== id
          )
          setArtist(indexDeletedArtist)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  useEffect(() => {
    axios.get(`${API}/songs/${id}/artists`).then((response) => {
      console.log(response.data)
      setArtist(response.data)
    })
  }, [id])

  return (
    <section className="Artists">
      <h2>Artist</h2>
      <ArtistForms handleSubmit={handleAddArtist}>
        <h3>Add a New Artist</h3>
      </ArtistForms>
      {artists.map((artist) => (
        <Artist
          key={artist.id}
          review={artist}
          handleDelete={handleDeleteArtist}
          handleSubmit={handleEditArtist}
        />
      ))}
    </section>
  )
}

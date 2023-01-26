import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Artist from "./Song"
import ArtistForm from "./SongsForm"

const API = process.env.REACT_APP_API_URL

export default function Artists() {
  const [artists, setArtist] = useState([])
  const { id } = useParams()

  const handleAddArtist = (newArtist) => {
    axios
      .post(`${API}/songs/${id}/artists`, newArtist)
      .then(
        (response) => {
          setArtist([response.data, ...artists])
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleEditArtist = (updatedArtist) => {
    axios
      .put(`${API}/songs/${id}/artists/${updatedArtist.id}`, updatedArtist)
      .then((response) => {
        const artistCopy = [...artists]
        const artistIndexUpdated = artistCopy.findIndex((artists) => {
          return artists.id === updatedArtist.id
        })
        artistCopy[artistIndexUpdated] = response.data
        setArtist(artistCopy)
      })
      .catch((c) => console.warn("catch", c))
  }

  const handleDeleteArtist = (id) => {
    axios
      .delete(`${API}/songs/${id}/artists/${id}`)
      .then(
        (response) => {
          const copyArtistArray = [...artists]
          const artistIndexDeleted = copyArtistArray.filter(
            (artists) => artists.id !== id
          )
          setArtist(artistIndexDeleted)
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
      <ArtistForm handleSubmit={handleAddArtist}>
        <h3>Add a New Artist</h3>
      </ArtistForm>
      {artists.map((artist) => (
        <Artist
          key={artist.id}
          artist={artist}
          handleDelete={handleDeleteArtist}
          handleSubmit={handleEditArtist}
        />
      ))}
    </section>
  )
}

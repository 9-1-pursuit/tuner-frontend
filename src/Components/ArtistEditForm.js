import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function ArtistEditForm() {
  const { id } = useParams
  const navigate = useNavigate

  const [artist, setArtist] = useState({
    name: "",
    album: "",
  })

  const updatedArtist = (updateArtist) => {
    axios
      .put(`${API}/artists/${id}`, updateArtist)
      .then(
        () => {
          navigate(`/artists/${id}`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn(`catch`, c))
  }

  const handleTextChange = (e) => {
    setArtist({ ...artist, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    axios.get(`${API}/artists/${id}`).then((res) => setArtist(res.data))(
      (error) => navigate(`/not-found`)
    )
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedArtist(artist, id)
  }
  return (
    <div className="container">
      <Form onsubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={artist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />

        <label htmlFor="album">Album</label>
        <input
          id="ablum"
          value={artist.album}
          type="text"
          name="album"
          onChange={handleTextChange}
          placeholder="Name of Album"
        />

        <input type="submit" />
      </Form>
    </div>
  )
}

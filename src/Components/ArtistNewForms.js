import axios from "axios"
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function ArtistNewForms() {
  const navigate = useNavigate()

  const [artist, setArtist] = useState({
    name: "",
    album: "",
  })

  const addOneArtist = (newArtist) => {
    axios
      .post(`${API}/artists`, newArtist)
      .then(
        () => {
          navigate(`/artists`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  function handleTextChange(e) {
    setArtist({ ...artist, [e.target.id]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addOneArtist(artist)
  }

  return (
    <div className="container">
      <Form onsubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
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
      </Form>
    </div>
  )
}

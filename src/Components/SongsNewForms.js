import axios from "axios"
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function SongsNewForms() {
  const navigate = useNavigate()

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  })

  const addOneSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  function handleTextChange(e) {
    setSong({ ...song, [e.target.id]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addOneSong(song)
  }

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite })
  }

  return (
    <div className="New">
      <Form onsubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of song"
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />
        <label htmlFor="album">Album</label>
        <input
          id="ablum"
          value={song.album}
          type="text"
          name="album"
          onChange={handleTextChange}
          placeholder="Name of Album"
        />
        <label htmlFor="is_favorite">Is your Favorite:</label>
        <input
          id="is_favorite"
          value={song.is_favorite}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="time">time</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="time"
        />
      </Form>
    </div>
  )
}

import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function SongsEditForm() {
  const { id } = useParams
  const navigate = useNavigate

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  })

  const updatedSongs = (updateSongs) => {
    axios
      .put(`${API}/songs/${id}`, updateSongs)
      .then(
        () => {
          navigate(`/songs/${id}`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn(`catch`, c))
  }

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value })
  }

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favortie: !song.is_favorite })
  }

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => setSong(res.data))((error) =>
      navigate(`/not-found`)
    )
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedSongs(song, id)
  }
  return (
    <div className="edit_form">
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
          onChange={handle}
        />
        <label htmlFor="time">time</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="time"
        />

        <input type="submit" />
      </Form>
    </div>
  )
}

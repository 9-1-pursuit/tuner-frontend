import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function SongsEditForm() {
  const { id } = useParams
  const navigate = useNavigate

  const [song, setSongs] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  })

  const updatedSong = (updateSongs) => {
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
    setSongs({ ...song, [e.target.id]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setSongs({ ...song, is_favorite: !song.is_favorite })
  }
  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => setSongs(res.data))((error) =>
      navigate(`/not-found`)
    )
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedSong(song, id)
  }
  return (
    <div className="container">
      <Form onsubmit={handleSubmit}>
        <label htmlFor="artist_name" className="form-label">
          Name:
        </label>
        <input
          id="artist_name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="song name"
          required
        />
        <label htmlFor="Album_title" className="form-label">
          Artist:
        </label>
        <input
          id="title"
          type="text"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album" className="form-label">
          Album
        </label>
        <input
          id="ablum"
          value={song.album}
          type="text"
          name="album"
          onChange={handleTextChange}
          placeholder="Name of Album"
        />
        <label htmlFor="is_favorite" className="form-label">
          Is your Favorite:
        </label>
        <input
          id="is_favorite"
          value={song.is_favorite}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="time" className="form-label">
          time
        </label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="time"
        />
        <br />

        <input type="submit" />
        <Button>
          <Link to={"/songs"}>Back</Link>
        </Button>
      </Form>
    </div>
  )
}

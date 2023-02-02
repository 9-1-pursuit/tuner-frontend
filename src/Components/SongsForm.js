import { useState, useEffect } from "react"
import { Form, useParams } from "react-router-dom"

export default function SongsForm(props) {
  const { id } = useParams()
  const { songDetails } = props

  const [song, setSongs] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    artist_id: id,
  })

  const handleTextChange = (event) => {
    setSongs({ ...song, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    if (songDetails) {
      setSongs(songDetails)
    }
  }, [id, songDetails, props])

  const handleCheckboxChange = () => {
    setSongs({ ...song, is_favorite: !song.is_favorite })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(song, id)
    if (songDetails) {
      props.toggleView()
    }
    setSongs({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
      artist_id: id,
    })
  }
  return (
    <div className="container">
      {props.children}
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </div>
  )
}

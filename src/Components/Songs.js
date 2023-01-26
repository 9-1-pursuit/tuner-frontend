import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Song from "./Song"
import SongsForm from "./SongsForm"

const API = process.env.REACT_APP_API_URL

export default function Songs() {
  const [songs, setSongs] = useState([])
  const { id } = useParams()

  const handleAddSong = (newSong) => {
    axios
      .post(`${API}/artists/${id}/songs`, newSong)
      .then(
        (response) => {
          setSongs([response.data, ...songs])
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleEditSong = (updatedSong) => {
    axios
      .put(`${API}/artists/${id}/songs/${updatedSong.id}`, updatedSong)
      .then((response) => {
        const copyofSongs = [...songs]
        const indexUpdatedSong = copyofSongs.findIndex((song) => {
          return id === updatedSong.id
        })
        copyofSongs[indexUpdatedSong] = response.data
        setSongs(copyofSongs)
      })
      .catch((c) => console.warn("catch", c))
  }

  const handleDeleteSong = (id) => {
    axios
      .delete(`${API}/artists/${id}/songs/${id}`)
      .then(
        (response) => {
          const copiedArray = [...songs]
          const indexDeletedSong = copiedArray.filter(
            (songs) => songs.id !== id
          )
          setSongs(indexDeletedSong)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  useEffect(() => {
    axios.get(`${API}/artists/${id}/songs`).then((response) => {
      console.log(response.data)
      setSongs(response.data)
    })
  }, [id])

  return (
    <section className="Songs">
      <h2>Songs</h2>
      <SongsForm handleSubmit={handleAddSong}>
        <h3>Add a New Song</h3>
      </SongsForm>
      {songs.map((song) => (
        <Song
          key={song.id}
          review={song}
          handleDelete={handleDeleteSong}
          handleSubmit={handleEditSong}
        />
      ))}
    </section>
  )
}

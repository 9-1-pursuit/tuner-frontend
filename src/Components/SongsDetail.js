import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function SongsDetail() {
  const [song, setSong] = useState([])
  const { id } = useParams
  const navigate = useNavigate()
  const API = process.env.REACT_APP_API_URL

  const handleDeleteSong = () => {
    axios
      .delete(`${API}/songs/%${id}`)
      .then(
        () => {
          navigate(`/songs`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data)
      })
      .catch((c) => {
        console.warn("catch", c)
      })
  }, [id, API])

  return (
    <article className="song_detail">
      <h5>
        {song.is_favorite ? <span>⭐️</span> : null}
        {song.name}
        <span>
          <p>{song.artist}</p>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {song.ablum}
      </h5>
      <h6>{song.time}</h6>
      <p>{song.is_favorite}</p>
      <div className="showNav">
        <>
          <Link to={`/songs`}>
            <Button>Back</Button>
          </Link>
        </>
        <>
          <Link to={`/songs/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
        <>
          <Button onClick={handleDeleteSong}>Delete </Button>
        </>
      </div>
    </article>
  )
}

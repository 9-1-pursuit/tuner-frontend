import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

const API = process.env.REACT_APP_API_URL

export default function SongsDetail() {
  const [songs, setSongs] = useState([])
  const { id } = useParams
  const navigate = useNavigate()

  const handleDeleteSongs = () => {
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
        setSongs(res.data)
      })
      .catch((c) => {
        console.warn("catch", c)
      })
  }, [id])

  const { name, album, released } = songs
  return (
    <Card>
      <article className="artists">
        <h5>
          {name}
          <span>
            <p>
              {album}
              {released}
            </p>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h5>
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
            <Button onClick={handleDeleteSongs}>Delete </Button>
          </>
        </div>
      </article>
    </Card>
  )
}

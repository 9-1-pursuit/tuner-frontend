import React, { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "react-bootstrap"
import Song from "./Song"

const API = process.env.REACT_APP_API_URL

export default function Songs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((c) => console.warn("catch", c))
  }, [])

  return (
    <div className="container">
      {console.log("I render first")}
      <section>
        <Table className="table">
          <thead>
            <tr>
              <th>
                <th>My Favorite song</th>
                <th>Let see that song</th>
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />
            })}
          </tbody>
        </Table>
      </section>
    </div>
  )
}

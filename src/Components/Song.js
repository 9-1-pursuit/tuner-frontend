import React, { useState } from "react"

import { Button, Table } from "react-bootstrap"
import SongsForm from "./SongsForm"

export default function Song({ song, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)
  const { name, artist, album, time, is_favorite } = song

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  return (
    <div className="container">
      {viewEditForm ? (
        <SongsForm
          ArtistDetails={song}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Table className=" table table-info table-hover">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Album: </th>
              <th>Favorite:</th>
            </tr>
          </thead>
          <tbody className=" table-group-divider">
            <tr>
              <td>{name}</td>
              <td>{artist}</td>
              <td>{time}</td>
              <td>{album}</td>
              <td>{is_favorite}</td>
            </tr>
          </tbody>
          <Button onClick={() => handleDelete(song.id)}>delete</Button>
        </Table>
      )}
      <Button onClick={toggleView}>edit this song</Button>
    </div>
  )
}

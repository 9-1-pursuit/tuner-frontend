import React, { useState } from "react"

import { Button } from "react-bootstrap"
import SongsForm from "./SongsForm"

export default function Song({ song, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)
  const { name, artist, album, time, is_favorite } = song

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  return (
    <div className="Songss">
      {viewEditForm ? (
        <SongsForm
          ArtistDetails={song}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <h3>Song: {name}</h3>
          <p>Artist: {artist}</p>
          <p>Time: {time}</p>
          <p>Album: {album}</p>
          <p>Favorite: {is_favorite}</p>

          <Button onClick={() => handleDelete(song.id)}>delete</Button>
        </>
      )}
      <Button onClick={toggleView}>edit this song</Button>
    </div>
  )
}

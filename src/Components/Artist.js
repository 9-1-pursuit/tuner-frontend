import React, { useState } from "react"
import { Button, Table } from "react-bootstrap"
import ArtistForms from "./ArtistForms"

export default function Artist({ artist, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)
  const { name, album, released } = artist

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  return (
    <div className="container">
      {viewEditForm ? (
        <ArtistForms
          ArtistDetails={artist}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Table className=" table table-info table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>released</th>
            </tr>
          </thead>
          <tbody className=" table-group-divider">
            <tr>
              <td>{name}</td>
              <td>{album}</td>
              <td>{released}</td>
            </tr>
          </tbody>
          <Button onClick={() => handleDelete(artist.id)}>delete</Button>
        </Table>
      )}
      <Button onClick={toggleView}>edit this song</Button>
    </div>
  )
}

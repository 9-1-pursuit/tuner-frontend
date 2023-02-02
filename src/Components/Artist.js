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
    <div className="artists">
      <tr>
        <td>{name}</td>
        <td>{album}</td>
        <td>{released}</td>
        <td>
          <Link to={`/artists/${id}`}>⭐️</Link>
        </td>
      </tr>
    </div>
  )
}

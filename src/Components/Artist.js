import React from "react"
import { Link } from "react-router-dom"

export default function Artist({ artist, id }) {
  const { name, album } = artist
  return (
    <div className="artists">
      <tr>
        <td>{name}</td>
        <td>
          <Link to={`/artists/${id}`}>⭐️</Link>
        </td>
      </tr>
    </div>
  )
}

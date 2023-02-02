import React from "react"
import { Link } from "react-router-dom"

export default function Song({ song, id }) {
  const { name, artist, album, time, is_favorite } = Song
  return (
    <div className="songs">
      <tr className="">
        <td>{name}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{time}</td>
        <td>{is_favorite}</td>
        <td>
          <Link to={`/songs/${id}`}>⭐️</Link>
        </td>
      </tr>
    </div>
  )
}

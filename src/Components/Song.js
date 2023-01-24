import React from "react"
import { Link } from "react-router-dom"

export default function Song({ song }) {
  return (
    <div className="tuner_song">
      <tr>
        <td>
          {song.is_favorite ? (
            <span>⭐️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
        <td>
          <a href={song.url} target="_blank" rel="noreferrer">
            {song.name}
          </a>
        </td>
        <td>
          <Link to={`/songs/${song.id}`}> </Link>
        </td>
      </tr>
    </div>
  )
}

import React from "react"

export default function SongsEditForm() {
  return (
    <div className="edit_form">
      <Form onsubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of song"
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />
        <label htmlFor="album">Album</label>
        <input
          id="ablum"
          value={song.album}
          type="text"
          name="album"
          onChange={handleTextChange}
          placeholder="Name of Album"
        />
        <label htmlFor="is_favorite">Is your Favorite:</label>
        <input
          id="is_favorite"
          value={song.is_favorite}
          type="checkbox"
          onChange={handle}
        />
        <label htmlFor="time">time</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="time"
        />

        <input type="submit" />
      </Form>
    </div>
  )
}

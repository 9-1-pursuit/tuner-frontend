import SongForm from "./SongForm";
import { useState } from "react";

function Song({ song, handleDelete, handleSubmit }) {
  const [viewEditForm , toggleEditForm] = useState(false)

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }


    return (
      <div className="Song">
        {viewEditForm ? (<SongForm songDetails={song} toggleView={toggleView} handleSubmit={handleSubmit}/>) : (
          <>

          <h4>
            {song.album} <span>{song.name}</span>
          </h4>
          <h5>Release Year: {song.time}</h5>
          <button onClick={() => handleDelete(song.id)}>delete</button>
          </>
        )}
        <button onClick = {toggleView}>edit this song</button>
      </div>
    );
  }
  
  export default Song;
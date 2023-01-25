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
          <br></br>
          <h4>
            Artist Name:<span>{song.artist}</span>
          </h4>
          <br></br>
          <h4>
            Song Name:<span>{song.name}</span>
          </h4>
          <br></br>
          <h4>
            Album Name:<span>{song.album}</span>
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
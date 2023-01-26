import { useState, useEffect } from "react";
import Song from "./Song";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Songs() {
  const [songs, setSongs] = useState([]);

useEffect(() => {
  axios
  .get(`${API}/songs`)
  .then((res) => {
    setSongs(res.data)
  })
  .catch(err => console.error())
}, []);

  return (
    <div className="Songs">
       <h2>My Song Playlist🎤</h2> 
       {songs.map((song) => {
        return (
             <div>
        <Song key={song.id} song={song}/>
            </div>
            )
        })}
    </div>
  );
}

export default Songs;
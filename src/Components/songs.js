import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
const [songs, setSongs] = useState([]);


  useEffect(() => {
    axios.get(`${API}/songs`)
    .then((res) => {
      setSongs(res.data)
    })
    .catch((error) => {
      console.log("catch", error)
    })

  }, []);


  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;

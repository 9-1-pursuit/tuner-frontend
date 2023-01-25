import { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./playlist";

const API = process.env.REACT_APP_API_URL;

function Playlists() {
const [plays, setPlays] = useState([]);


  useEffect(() => {
    axios.get(`${API}/playlist`)
    .then((res) => {
      setPlays(res.data)
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
            {plays.map((play) => {
              return <Playlist key={play.id} play={play} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Playlists;

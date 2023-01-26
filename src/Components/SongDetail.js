import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from './Reviews'
const API = process.env.REACT_APP_API_URL;

function SongDetail() {
  let { id } = useParams();
  const [song, setSong] = useState([]);
  const navigate = useNavigate();

  
  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    axios
    .get(`${API}/songs/${id}`)
    .then((response) => {
      setSong(response.data);
    })
    .catch((c) => {
      console.warn("catch", c);
    });
  }, [id]);


  return (
    <>
    <article className="Song-Details">
      {song.is_favorite ? <span>⭐️</span> : null}
      <h2>{song.name} By {song.artist}</h2>
      <br></br>
      <h3>Album: {song.album}</h3>
      <h3>Time-Length: {song.time}</h3>
      <div className="showSongs">
        <div className="song">
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
    {/* <Reviews /> */}
    </>
  );
}

export default SongDetail;

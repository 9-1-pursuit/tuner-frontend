import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
    .get(`${API}/songs/${id}`)
    .then((res) =>{
      console.log(id)
      setSong(res.data)
    })
    .catch( (error) => {
     console.error(error); 
    })
  },[id])
  
  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => console.error(e));
  };


  return (
    // <>
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
    // </>
    );
  }
  
  export default SongDetails;


import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


function SongDetails() {
  const [song, setSong] = useState({});

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((res) => {
      setSong(res.data);
    });
  }, [id, navigate, API]);



  const deleteBookmark = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };



  const handleDelete = () => {
    deleteBookmark();
  };
  return (
    <>
      <article>
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name}
        </h3>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    
    </>
  );
}

export default SongDetails;
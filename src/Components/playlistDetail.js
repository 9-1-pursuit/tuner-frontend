import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Songs from "./Songs";
const API = process.env.REACT_APP_API_URL;


function PlaylistDetails() {
  const [play, setPlay] = useState({});

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/playlist/${id}`)
    .then((res) => {
      setPlay(res.data);
    });
  }, [id, navigate, API]);



  const deleteBookmark = () => {
    axios
      .delete(`${API}/playlist/${id}`)
      .then(() => {
        navigate(`/playlist`);
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
          {play.is_favorite ? <span>⭐️</span> : null} {play.name}
        </h3>
        <h4>Description: {play.description}</h4>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/playlist`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/playlist/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      <Songs/>
      </article>
    
    </>
  );
}

export default PlaylistDetails;
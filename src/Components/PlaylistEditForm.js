import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function PlaylistEditForm() {
  let { id } = useParams();


  let navigate = useNavigate();

  const [play, setPlay] = useState({
    name: '',
    description: '',
    is_favorite: false
  });

  const updatePlay = (updatedPlay) => {
    axios
      .put(`${API}/playlist/${id}`, updatedPlay)
      .then(
        () => {
          navigate(`/playlist/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setPlay({ ...play, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlay({ ...play, is_favorite: !play.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/playlist/${id}`)
    .then(
      (response) => setPlay(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlay(play, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={play.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          required
          value={play.description}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={play.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/playlist/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default PlaylistEditForm;

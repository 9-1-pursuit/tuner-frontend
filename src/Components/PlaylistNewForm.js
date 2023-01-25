import { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function PlaylistNewForm() {
  let navigate = useNavigate();

  const addPlay = (newPlay) => {
    axios
      .post(`${API}/playlist`, newPlay)
      .then(
        () => {
          navigate(`/playlist`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const [play, setPlay] = useState({
    name: '',
    description: '',
    is_favorite: false
  });

  const handleTextChange = (event) => {
    setPlay({ ...play, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlay({ ...play, is_favorite: !play.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlay(play);
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
      <Link to={`/playlist`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default PlaylistNewForm;

import { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const [song, setSong] = useState({
    name: '',
    url: '',
    category: '',
    is_favorite: false
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          required
          value={song.album}
          onChange={handleTextChange}
        />
        <label htmlFor="time">Release Date:</label>
        <input
          id="time"
          type="date"
          value={song.time}
          pattern="mm/dd/yyyy"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongNewForm;

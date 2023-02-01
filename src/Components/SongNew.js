import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function SongNew() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  
  const addSong = (newSong) => {
    axios
    .post(`${API}/songs`, newSong)
    .then(
      () => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
    };
    const handleCheckboxChange = () => {
      setSong({ ...song, is_favorite: !song.is_favorite });
    };
    
    const handleTextChange = (event) => {
      setSong({ ...song, [event.target.id]: event.target.value });
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song)
  };
  return (
    <div className="new">
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Song Name</label>
    <input
      id="name"
      type="text"
      value={song.name}
      placeholder="name"
      onChange={handleTextChange}
      required
    />
    <label htmlFor="artist">Artist</label>
    <input
      id="artist"
      type="text"
      value={song.artist}
      placeholder="artist"
      onChange={handleTextChange}
      required
    />
    <label htmlFor="album">Album</label>
    <input
      id="album"
      name="album"
      type="text"
      value={song.album}
      placeholder="album"
      onChange={handleTextChange}
    />
    <label htmlFor="time">Time</label>
    <input
      id="time"
      type="text"
      value={song.time}
      placeholder="time"
      onChange={handleTextChange}
    />
    <label htmlFor="is_favorite">Favorite</label>
    <input
      id="is_favorite"
      type="checkbox"
      checked={song.is_favorite}
      onChange={handleCheckboxChange}
    />

    <br />
    <input type="submit" />
  </form>
    </div>
);
};

export default SongNew;
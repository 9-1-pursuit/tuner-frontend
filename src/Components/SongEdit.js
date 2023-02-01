import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;



const SongEdit = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
    });
  
    const updateSong = (updatedsong) => {
      axios
        .put(`${API}/songs/${id}`, updatedsong)
        .then(
          () => {
            navigate(`/songs/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setSong({ ...song, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      updateSong(song, id);
    };
  
    useEffect(() => {
      axios.get(`${API}/songs/${id}`).then(
        (response) => setSong(response.data),
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  

    return (
        <div className="Edit">
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
          required
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
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back!</button>
      </Link>
        </div>
    );
};

export default SongEdit;
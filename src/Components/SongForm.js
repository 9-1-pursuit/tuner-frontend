import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongForm(props) {
  let { id } = useParams();
  const { songDetails } = props;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    playlist_id: id,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    if (songDetails) {
      setSong(songDetails);
    }
  }, [id, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(song, id);
    if (songDetails) {
      props.toggleView();
    }
    setSong({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
      playlist_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Name"
          required
        />
         <label htmlFor="artist">Artist Name:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist Name"
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
        <label htmlFor="time">Release Year:</label>
        <input
          id="time"
          type="text"
          value={song.time}
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
    </div>
  );
}

export default SongForm;
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song";
import SongForm from "./SongForm";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  const { id } = useParams();


console.log(songs)

  useEffect(() => {
    axios.get(`${API}/playlist/${id}/songs`).then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`${API}/playlist/${id}/songs/${id}`)
      .then(
        (response) => {
          const copySongsArray = [...songs];
          const indexDeletedSongs = copySongsArray.findIndex((song) => {
            return song.id === id;
          });
          copySongsArray.splice(indexDeletedSongs, 1);
          setSongs(copySongsArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  


  const handleAdd = (newReview) => {
    axios
      .post(`${API}/playlist/${id}/songs`, newReview)
      .then(
        (response) => {
          setSongs([response.data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSongs) => {
    axios
      .put(`${API}/playlist/${id}/songs/${updatedSongs.id}`, updatedSongs)
      .then((response) => {
        const copySongsArray = [...songs];
        const indexUpdatedSongs = copySongsArray.findIndex((song) => {
          return song.id === updatedSongs.id;
        });
        copySongsArray[indexUpdatedSongs] = response.data;
        setSongs(copySongsArray);
      })
      .catch((c) => console.warn("catch", c));
  };



  return (
    <section className="Songs">
      <h2>Songs</h2>
    <SongForm handleSubmit={handleAdd}>
      <h3>Add a New Song</h3>
    </SongForm>
      {songs.map((song) => (
        <Song key={song.id} song={song} handleDelete={handleDelete} handleSubmit={handleEdit}/>
      ))}
    </section>
  );
}

export default Songs;
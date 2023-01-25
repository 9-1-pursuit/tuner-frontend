import { Link } from "react-router-dom";

function Playlist({ play }) {
  return (
    <tr>
      <td>
        {play.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
       {play.name}
      </td>
      <td>
        <Link to={`/playlist/${play.id}`}>🎵</Link>
      </td>
    </tr>
  );
}

export default Playlist;;
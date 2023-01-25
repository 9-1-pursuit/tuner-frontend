import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/playlist">Playlist</Link>
      </h1>
      <button>
        <Link to="/playlist/new">New Playlist</Link>
      </button>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/playlist">Songs</Link>
      </h1>
      <button>
        <Link to="/playlist/new">New Songs</Link>
      </button>
    </nav>
  );
}

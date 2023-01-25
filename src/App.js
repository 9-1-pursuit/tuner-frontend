
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/home";
import Playlists from "./Components/playlists";
import NavBar from "./Components/NavBar";
import PlaylistDetails from "./Components/playlistDetail";
import PlaylistNewForm from "./Components/PlaylistNewForm"
import PlaylistEditForm from "./Components/PlaylistEditForm";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/playlist" element={<Playlists/>} />
            <Route path="/playlist/new" element={<PlaylistNewForm/>} />
            <Route  path="/playlist/:id" element={<PlaylistDetails/>} />
            <Route path="/playlist/:id/edit" element={<PlaylistEditForm/>} />
            
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


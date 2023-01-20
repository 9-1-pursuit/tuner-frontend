
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/home";
import Songs from "./Components/songs";
import NavBar from "./Components/NavBar";
import SongDetails from "./Components/songDetail";
import SongNewForm from "./Components/songNewForm";
import SongEditForm from "./Components/songEditForm";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/songs" element={<Songs/>} />
            <Route path="/songs/new" element={<SongNewForm/>} />
            <Route  path="/songs/:id" element={<SongDetails/>} />
            <Route path="/songs/:id/edit" element={<SongEditForm/>} />
            
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


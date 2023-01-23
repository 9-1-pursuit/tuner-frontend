import { Router, Routes, Route } from "react-router-dom"

// PAGES

import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import New from "./Pages/New"
import Edit from "./Pages/Edit"
import Error from "./Pages/Error"

// COMPONENTS
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App_home">
      <h1>Tuner App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

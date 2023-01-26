import { Route, Routes } from "react-router-dom"

// PAGES

import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import New from "./Pages/New"
import Edit from "./Pages/Edit"
import Error from "./Pages/Error"

// COMPONENTS
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
// import Artists from "./Components/Artists"
// import ArtistForm from "./Components/ArtistForm"
// import Artist from "./Components/Artist"

function App() {
  return (
    <div className="App_home">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />

          {/* <Route path="artists">
            <Route path="/artists/:id" element={<Artist />} />
            <Route path index element={<Artists />} />
            <Route path="edit" element={<ArtistForm />} />
          </Route> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </div>
  )
}
export default App

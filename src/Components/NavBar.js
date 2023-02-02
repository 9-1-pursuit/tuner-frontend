import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import dance from "../assets/dance.jpg"

export default function NavBar() {
  return (
    <div className="nav">
      <h2>
        <Link to="/songs">Songs</Link>
      </h2>

      <Button>
        <Link to="/songs/new">New Songs</Link>
      </Button>
    </div>
  )
}

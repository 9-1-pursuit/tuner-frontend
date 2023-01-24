import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="nav">
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <Button>
        <Link to="/songs/new">New Songs</Link>
      </Button>
    </div>
  )
}

import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import dance from "../assets/dance.jpg"

export default function NavBar() {
  return (
    <div className="container">
      <div className="nav">
        <h2 className="col">
          <Link to="/songs">
            <img src={dance} alt="dance pic" />
            Home
          </Link>
        </h2>
        <div className="col-2">
          <Link to="/artists">
            <img src={dance} alt="dance pic" />
            Artist
          </Link>
        </div>
        <div className="col-2">
          <Button className="btn btn-outline-primary">
            <Link to="/songs/new">New Songs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

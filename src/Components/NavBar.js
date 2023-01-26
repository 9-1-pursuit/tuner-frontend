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
          </Link>
        </h2>

        <Button className="col-2 btn btn-outline">
          <Link to="/songs/new">New Songs</Link>
        </Button>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>
                <Link to='/'>Home</Link>
            </h1>
            <h1>
                <Link to='/songs'>Songs</Link>
            </h1>
            <h1>
                <Link to='/songs/new'> New Song</Link>
            </h1>
        </div>
    );
};

export default NavBar;
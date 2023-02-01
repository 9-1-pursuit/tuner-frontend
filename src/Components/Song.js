import React from 'react';
import { Link } from 'react-router-dom';

const Song = ({song}) => {
    return (
        <>
            <div>
             {song.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </div>
      <div>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </div>
        </>
    );
};

export default Song;
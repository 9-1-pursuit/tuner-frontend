import React from 'react';
import { Link } from 'react-router-dom';

const Song = ({song}) => {
    return (
        <div className='Song'>
            <td>
             {song.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
        </div>
    );
};

export default Song;
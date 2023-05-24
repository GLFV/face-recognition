import React from 'react';
import photo from './photo.jpg';

export default function Home() {
  return (
    <div>
      <div className="pa3 center">
        <img
          style={{ paddingTop: '5px' }}
          alt="logo"
          src={photo}
          width="auto"
          height="300rem"
        />
      </div>
      <div className="f3 center">
        {' '}
        This is the site for my modular test work, it knows how to search for a
        face in a photo
      </div>
    </div>
  );
}

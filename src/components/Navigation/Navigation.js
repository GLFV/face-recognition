import React from 'react';
import './Navigation.css';

export default function Navigation({ onRouteChange, isSignedIn }) {
  if (!isSignedIn) {
    return (
      <div className="">
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className="f3 link dim black pa3 pointer bold">Sign In</p>
          <p className="f3 link dim black pa3 pointer">Register</p>
        </nav>
      </div>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f3 link dim black pa3 pointer">Sign Out</p>
      </nav>
    );
  }
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1 className="title">Bestie Mail</h1>
        <h4 className="subtitle mb-2">A special message for that special someone</h4>
        <div className="mt-5 row mx-auto button-container">
          <div className="col-12 exercise-card">
            <NavLink to="/record" className="nav-button">
              <h4>Start</h4>
              <p className="mt-5 px-2">Record a video answering some funny questions. Download and send it to someone you want to smile :-)</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1 className="title">Brevity Trainer</h1>
        <h4 className="subtitle mb-2">Less is more</h4>
        <div className="mt-5 row mx-auto button-container">
          <div className="col-12 exercise-card">
            <NavLink to="/train" className="nav-button">
              <h4>Train</h4>
              <p className="mt-5 px-2">Record a video speaking about a random prompt. Then, redo it more concisely. And repeat.</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
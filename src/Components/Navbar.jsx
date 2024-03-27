import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <>
    <div className="navbar">
    <h1>FoodyWorld</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cuisine">Cuisine</Link>
          </li>
        {/* <li>Customer Care</li> */}
      </ul>
    </nav>
    </div>
    </>
  );
}
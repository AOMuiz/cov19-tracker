import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="bg-img">
        <nav className="topnav" id="myTopnav">
          <ul>
          <li className="active">Covid-19 Statistics</li>
          <Link to='/cov19-tracker'><li>Home</li></Link>
          <Link to='/cov19-tracker/news'><li>News</li></Link>
          <Link to='/cov19-tracker/vaccineNews'><li>Vaccine</li></Link>
          <Link to='/cov19-tracker/map'><li>Map</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

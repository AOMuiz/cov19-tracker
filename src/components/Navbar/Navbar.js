import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <header id='nav-header'>
    //   <div className='welcome-banner'>
    //     <h3>Covid-19 Statistics</h3>
    //   </div>
    //   <nav id='navbar'>
    //     <ul>
    //       <Link to='/Home'>
    //         <li className='nav-link'>Home</li>
    //       </Link>
    //       <Link to='/News'>
    //         <li className='nav-link'>News</li>
    //       </Link>
    //       <Link to='/VaccineNews'>
    //         <li className=''>Vaccine</li>
    //       </Link>
    //       <Link to='/Map'>
    //         <li className=''>Map</li>
    //       </Link>
    //     </ul>
    //   </nav>
    // </header>

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

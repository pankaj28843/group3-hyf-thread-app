import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="masthead">
        <div className="header-menu">
        <nav>
          <ul>
            <li className="nav-item">
          <Link to="/" className="nav-link menuLink"> Home </Link>
          </li>
            <li className="nav-item Interships">
          <Link to="/Internships" className="menuLink nav-link"> Internships </Link>
          </li>
            <li className="nav item Events">
          <Link to="/Events" className="menuLink nav-link"> Events </Link>
          </li>
            <li className="nav item Mentors">
          <Link to="/Mentors" className="menuLink nav-link"> Mentors </Link>
          </li>
          <li className= "nav item Networking">
          <Link to="/Networking" className=" nav-link"> Networking </Link>
          </li>
          </ul>
           
        </nav>
      </div> 
      </div> 
    );
  }
}

export default Header;

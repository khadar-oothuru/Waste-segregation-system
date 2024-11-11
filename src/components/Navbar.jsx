import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Navbar = () => {
  

  return (
    <nav className="navbar bg-base-100 shadow-md p-4">
      {/* Navbar Start: Logo and Mobile Dropdown Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown for Small Screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown Menu Items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]"
          >
            <li><Link to="/demo"> Demo </Link></li>
            <li><Link to="/total-waste">Total Waste Data</Link></li>
            <li><Link to="/real-time-data">View Real-Time Data</Link></li>
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="flex items-center btn btn-ghost text-xl font-bold text-primary">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          Waste Segregation System
        </Link>
      </div>

      {/* Navbar Center: Links for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li><Link to="/demo" className="text-lg font-medium">Demo</Link></li>
          <li><Link to="/total-waste" className="text-lg font-medium">Total Waste Data</Link></li>
        </ul>
      </div>

      {/* Navbar End: Button for Real-Time Data */}
      <div className="navbar-end hidden lg:flex">
        <Link to="/real-time-data" className="btn btn-primary text-white">
          View Real-Time Data
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

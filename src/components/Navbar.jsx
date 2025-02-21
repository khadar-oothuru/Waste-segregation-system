import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      try {
        const decodedToken = jwtDecode(user.credential);
        console.log("Decoded Token:", decodedToken);
        setUserImage(decodedToken.picture);
        setUserName(decodedToken.name); // Extracting the user's name
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            <li>
              <Link to="/demo"> Demo </Link>
            </li>
            <li>
              <Link to="/total-waste">Total Waste Data</Link>
            </li>
            <li>
              <Link to="/real-time-data">Real-Time Data</Link>
            </li>
          </ul>
        </div>
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center btn btn-ghost text-xl font-bold text-primary"
        >
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          Waste Segre Sys
        </Link>
      </div>

      {/* Navbar Center: Links for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/demo" className="text-lg font-medium">
              Demo
            </Link>
          </li>
          <li>
            <Link to="/total-waste" className="text-lg font-medium">
              Total Waste Data
            </Link>
          </li>
          <li>
            <Link to="/real-time-data" className="text-lg font-medium">
              Real-Time Data
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End: Profile & Logout */}
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
        
              <h1 className="btn flex justify-center items-center btn-primary text-lg font-medium text-white">
                {userName}
              </h1>
            

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={userImage} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

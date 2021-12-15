import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/orders/orderContext";

const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const a = useContext(noteContext);
  const invert = a.mode === "dark" ? "light" : "dark";
  let location = useLocation();

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${a.mode} bg-${a.mode}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong style={{ color: "blue" }}>{props.title}</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : " "
                  } mx-1
                  `}
                  to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? " " : "active"
                  } mx-1
                  `}
                  to="/orders">
                  {props.about}
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={a.toggleMode}
              className={`btn mx-2 btn-outline-${invert} shadow-none`}>
              {a.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            {!localStorage.getItem("token") ? (
              <div>
                <Link
                  type="button"
                  to="/login"
                  className={`btn mx-2 btn-outline-${invert} shadow-none`}>
                  Login
                </Link>
                <Link
                  type="button"
                  to="/signup"
                  className={`btn mx-2 btn-outline-${invert} shadow-none`}>
                  Sign Up
                </Link>
              </div>
            ) : (
              <Link
                type="button"
                to="/signup"
                onClick={handleLogout}
                className={`btn mx-2 btn-outline-${invert} shadow-none`}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

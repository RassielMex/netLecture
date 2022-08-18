import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("loggedIn");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav>
      <Link to={"/"} className="navbar-logo">
        <img
          src="https://fontmeme.com/permalink/220408/bf95b7dc9c4406c3f575429d618da6cb.png"
          alt="netflix-font"
        />
      </Link>
      <div className="logout-container">
        <span className="logout-text">Salir</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-left logout-icon"
          viewBox="0 0 16 16"
          onClick={handleLogOut}
        >
          <path
            fill-rule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

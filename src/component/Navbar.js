import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { deleteToken } from "../api/storage";
import RecipeCard from "./RecipeCard";

const Navbar = () => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {user ? (
          <div class="container-fluid">
            <button
              to="/"
              className="nav-link active"
              onClick={() => {
                deleteToken();
                setUser(false);
              }}
            >
              Logout
            </button>
            <div className="container-fluid">
              <button>Logout</button>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;

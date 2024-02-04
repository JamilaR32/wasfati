import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { deleteToken } from "../api/storage";
import RecipeCard from "./RecipeCard";

const Navbar = () => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          </div>
        ) : (
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;

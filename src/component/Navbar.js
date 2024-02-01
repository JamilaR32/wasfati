import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

const Navbar = () => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        {user ? (
          <div class="container-fluid">
            <button>Logout</button>
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

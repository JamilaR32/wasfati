import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

const Navbar = () => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {user ? (
          <div className="container-fluid">
            <button>Logout</button>
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

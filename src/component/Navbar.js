import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import logo from "../assets/logo-w.png";
import { deleteToken } from "../api/storage";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = ({ setShowModal }) => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div className="container w-screen">
      <nav className="navbar navbar-expand-xs bg-body-tertiary w-screen flex">
        <div className=" w-screen flex justify-center h-full">
          <img src={logo} className="rounded-full h-[90px] w-[90]" />
        </div>
        {user ? (
          <div class="container-fluid">
            <NavLink
              className="navbar-brand bg-[#00000030] btn max-w-xs"
              to="/"
            >
              Home
            </NavLink>

            <button
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
          <div className="container-fluid gap-2 ">
            <NavLink
              className="navbar-brand bg-[#00000030] btn max-w-xs"
              to="/signin"
            >
              Sign In
            </NavLink>
            <NavLink
              className="navbar-brand bg-[#00000030] btn max-w-xs"
              to="/signup"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;

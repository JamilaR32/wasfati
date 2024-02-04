import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import logo from "../assets/logo-w.png";
import { deleteToken } from "../api/storage";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div className="container w-full">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-[#00000020] w-screen">
        <div className=" w-full flex justify-center items-center h-full">
          <img src={logo} className="rounded-full h-[75px] w-[75px]" />
        </div>
        {user ? (
          <div class="container-fluid">
            <button
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


            <div className="container-fluid">
              <button
                onClick={() => {
                  deleteToken();
                  setUser(false);
                }}
              >
                Logout
              </button>

            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/signin">
              SignIn
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;

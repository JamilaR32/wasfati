import { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import logo from "../assets/logo-w.png";
import { deleteToken } from "../api/storage";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = ({ setShowModal }) => {
  const [user, setUser] = useContext(Usercontext);
  return (
    <div className="container">
      <div className="container w-full">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-[white] w-screen">
          <div className=" w-full flex justify-center items-center h-full">
            <img src={logo} className="rounded-full h-[75px] w-[75px]" />
          </div>
          {user ? (
            <div className="container-fluid">
              <Button
                onClick={() => {
                  deleteToken();
                  setUser(false);
                }}
                lable="Logout"
              />
              <div className="ml-auto mr-[50px]">
                <div></div>
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
    </div>
  );
};
export default Navbar;

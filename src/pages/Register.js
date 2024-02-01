import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => {
      register(userInfo);
    },
    onSuccess: () => {
      const pass = document.getElementById("password");
      const confpass = document.getElementById("confirmpassword");
      if (pass.value !== confpass.value) {
        return alert("Please enter the same passord");
      } else {
        setUser(true);
        navigate("/");
      }
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[grey] w-[20%] h-[70%]">
        <div>
          <form
            className="flex flex-col justify-center items-center space-y-2"
            onSubmit={handleFormSubmit}
          >
            <div>Sign Up</div>
            <label>E-mail:</label>
            <input
              id="email"
              name="email"
              placeholder="write your e-mail"
              onChange={handleChange}
            ></input>
            <label>Username:</label>
            <input
              id="username"
              name="username"
              placeholder="write your username"
              onChange={handleChange}
            ></input>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="write a unique password"
              onChange={handleChange}
            ></input>
            <label>Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm your password"
              onChange={handleChange}
            ></input>
            <button type="submit" className="btn bg-slate-50">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

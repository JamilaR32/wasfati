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
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      // console.log(userInfo);
      // const pass = document.getElementById("password");
      // const confpass = document.getElementById("confirmpassword");

      setUser(true);
      navigate("/");
      // console.log(userInfo);
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("first", userInfo);
    if (userInfo.password !== userInfo.confirmpassword) {
      return alert("Please enter the same passord");
    } else {
      mutate();
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[grey] w-[40%] h-[70%]  ml-[600px]">
        <div>
          <form
            className="flex flex-col justify-center items-center space-y-2"
            onSubmit={handleFormSubmit}
          >
            <div>Sign Up</div>
            <label>E-mail:</label>
            <input
              name="email"
              placeholder="write your e-mail"
              onChange={handleChange}
            ></input>
            <label>Username:</label>
            <input
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

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
      setUser(true);
      navigate("/");
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-[red]">
        <div className="flex flex-col">
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
            placeholder="write your password again"
            onChange={handleChange}
          ></input>
          <button>signUp</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

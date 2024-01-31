import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["Login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/home");
    },
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <form onSubmit={handleFromSubmit}>
        <label>
          Write your email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="email"
          />
        </label>
        <label className="text-center">
          Your password:
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button type="submit" className="btn btn-accent w-full max-w-xs">
          Login
        </button>
      </form>
    </div>
  );
};

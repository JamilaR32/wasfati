import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import signinpic from "../assets/signin.png";
export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["signin"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/recipe");
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
    <div
      className="h-screen w-screen"
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: "50",
        display: "flex",
      }}
    >
      <div className=" bg-slate-100 p-10 rounded-lg flex justify-items-center">
        <img src={signinpic} className="h-[200px]" />

        <form onSubmit={handleFromSubmit} className="space-y-3">
          <div className="flex flex-col  ">
            <label> E-mail:</label>
            <input
              className="border-gray-300 border-2 rounded-lg p-2"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              className="border-gray-300 border-2 rounded-lg p-2"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="grid gap-8 btn btn-accent w-full max-w-xs"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

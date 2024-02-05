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
      className=" relative"
      style={{
        height: "100vh",
        width: "100vh",
        alignItems: "center",
        justifyContent: "center",
        gap: "50",
        display: "flex",
      }}
    >
      <div className=" bg-slate-100 p-10 rounded-lg absolute z-auto">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Signin
        </h1>
        <form onSubmit={handleFromSubmit}>
          <div className="flex flex-col gap-5 ">
            <label> email:</label>
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
            <label>password:</label>
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
              class="grid gap-8 btn btn-accent w-full max-w-xs"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

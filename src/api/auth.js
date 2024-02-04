import instance from ".";
import { saveToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/users/signin", userInfo);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/users/signup", userInfo);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};

export { login, register };

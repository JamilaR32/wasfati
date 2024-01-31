import instance from ".";
import { saveToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("", userInfo);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};

export { login };

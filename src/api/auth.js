import instance from ".";
import { saveToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("", userInfo);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.post("/signup", formData);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};
const getAllRecipes = async () => {
  const { data } = await instance.get("/api/recipe");
  return data;
};
const getRecipeById = async () => {
  const { data } = await instance.get("/api/recipe");
  return data;
};
export { login, register, getAllRecipes, getRecipeById };

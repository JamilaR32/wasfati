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
  const { data } = await instance.post("/users/signup", userInfo);
  if (data.token) {
    saveToken(data.token);
  }
  return data;
};
const getAllRecipes = async () => {
  const { data } = await instance.get("/recipe");
  return data;
};
const getRecipeById = async () => {
  const { data } = await instance.get("/api/recipe/:_id");
  return data;
};
export { login, register, getAllRecipes, getRecipeById };

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
const getAllRecipes = async () => {
  const { data } = await instance.get("/recipe");
  return data;
};
const getRecipeById = async (recipeId) => {
  const res = await instance.get(`/recipe/${recipeId}`);
  return res.data;
};

const getAllCategory = async () => {
  const { data } = await instance.get("/category");
  return data;
};

const getAllingrediants = async () => {
  const { data } = await instance.get("/ingrediants");
  return data;
};

const createIng = async (name) => {
  const { data } = await instance.post("/ingrediants", name);
  return data;
};
export {
  login,
  register,
  getAllRecipes,
  getRecipeById,
  getAllCategory,
  getAllingrediants,
  createIng,
};

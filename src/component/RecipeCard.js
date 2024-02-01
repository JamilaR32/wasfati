import { useMutation, useQueryRecipe } from "@tanstack/react-query";
import React, { useState } from "react";

import { getAllRecipes, getRecipeById } from "../api/auth";
import { BASE_URL } from "../api";

const RecipeCard = ({ name, text, image, _id }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`${BASE_URL}/${image}`} alt="Recipe!!" />
      </figure>
      <div className="card-body">
        {_id}
        <h2 className="card-title">{name}</h2>
        <p>
          {text.substring(0, text.length >= 100 ? 100 : text.length)}{" "}
          {text.length >= 100 && "..."}
        </p>
        <div className="card-actions justify-end">
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

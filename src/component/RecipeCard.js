import React from "react";
import { BASE_URL } from "../api";

const RecipeCard = ({ name, text, image, _id, onClick = () => {} }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`${BASE_URL}/${image}`}
          alt="Recipe!!"
          className="w-[200px]"
        />
      </figure>
      <div className="card-body">
        {_id}
        <h2 className="card-title">{name}</h2>
        <p>
          {text?.substring(0, text?.length >= 100 ? 100 : text?.length)}{" "}
          {text?.length >= 100 && "..."}
        </p>
        <div className="card-actions justify-end">
          <button
            className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
            onClick={onClick}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

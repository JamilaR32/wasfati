import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/auth";
import RecipeCard from "../component/RecipeCard";

const OneRecipe = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading } = useQuery({
    queryKey: ["one recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
    onSuccess: () => {
      console.log(recipe);
    },
  });
  //console.log(data);
  const recipesCard = !recipe ? null : (
    <RecipeCard
      name={recipe.name}
      text={recipe.text}
      image={recipe.image}
      _id={recipe._id}
    />
  );

  return (
    <div>
      OneRecipe
      <div>
        {}
        <div className=" mx-10 SS">
          <div
            className="grid grid-cols-3 gap-3 "
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {recipesCard}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneRecipe;

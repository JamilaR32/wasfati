import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/auth";

const OneRecipe = () => {
  const { recipeId } = useParams();
  const { data } = useQuery({
    queryKey: ["one recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
  });
  console.log(data);
  return <div>OneRecipe</div>;
};

export default OneRecipe;

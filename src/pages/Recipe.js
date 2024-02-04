import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/auth";
import RecipeCard from "../component/RecipeCard";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });

  const navigate = useNavigate();
  const recipesCard = recipes?.map((recipe) => (
    <RecipeCard
      name={recipe.name}
      text={recipe.text}
      image={recipe.image}
      _id={recipe._id}
      onClick={() => {
        navigate(`/recipe/${recipe._id}`);
      }}
    />
  ));

  return (
    <div className=" mx-10 SS">
      {isLoading ? (
        <>is Loading..</>
      ) : (
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
      )}
    </div>
  );
};

export default Recipe;

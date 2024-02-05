import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/auth";
import RecipeCard from "../component/RecipeCard";
import { useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import { useContext, useState } from "react";
import Button from "../component/Button";
import Usercontext from "../context/Usercontext";
const Recipe = () => {
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const recipesCard = recipes?.map((recipe) => (
    <RecipeCard
      name={recipe.name}
      text={recipe.text}
      image={recipe.image}
      _id={recipe._id}
      setShowModal={setShowModal}
      onClick={() => {
        navigate(`/recipe/${recipe._id}`);
      }}
    />
  ));
  const [user, setUser] = useContext(Usercontext);
  const [category, setCategory] = useState("");
  return (
    <div className=" mx-10 SS">
      {!user ? (
        <div
          className="grid grid-cols-3 gap-3 "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* <Modal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
          ></Modal> */}
          {recipesCard}
        </div>
      ) : (
        <div
          className="grid grid-cols-3 gap-3 "
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="h-[75px] w-[80px]">
            <Button
              lable="New Recipe"
              onClick={() => {
                setShowModal(true);
              }}
            />
            <Modal
              show={showModal}
              close={() => {
                setShowModal(false);
              }}
            >
              <input type="file" className="file-input w-full max-w-xs" />

              <label className="form-control w-full max-w-xs">
                <div className="label ">
                  <span className="label-text">Enter the recipe name:</span>
                </div>
                <input
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter the recipe details:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              {/* <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter Ingredient:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label> */}
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  choose category
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Breakfast</a>
                  </li>
                  <li>
                    <a>Lunch</a>
                  </li>
                  <li>
                    <a>Dinnar</a>
                  </li>
                  <li>
                    <a>Deasrt</a>
                  </li>
                </ul>
              </div>
              <input
                type="Add"
                value="Add Ingredient"
                className="btn flex justify-end items-end"
              />
              <input
                type="Add"
                value="Save recipe"
                className="btn flex justify-end items-end"
              />
            </Modal>
          </div>

          {recipesCard}
        </div>
      )}
    </div>
  );
};

export default Recipe;

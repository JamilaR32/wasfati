import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCategory } from "../api/auth";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: () => getAllCategory(),
  });
  console.log(categories);
  const categoriesList = categories?.map((item) => {
    console.log(item);
    return (
      <li>
        <Link
          to="/signin"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <div className="w-[25%]">
      <div className=" h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href=""
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Categories
              </a>
            </li>

            <li>{categoriesList}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

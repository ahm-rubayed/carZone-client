import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://carzone-server-ahm-rubayed.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-16 container mx-auto">
      <h3 className="text-3xl text-center font-semibold uppercase">
        Get our <span className="font-bold text-red-500">best cars</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center gap-12">
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category}></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;

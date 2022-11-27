import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({category}) => {
    const {name, img} = category;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="cars" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary text-white" to={`/category/${category._id}`}>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

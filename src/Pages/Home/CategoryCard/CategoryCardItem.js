import React from "react";

const CategoryCardItem = ({ car, setProducts }) => {
  const { img, name } = car;
  console.log(car)

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setProducts(car)}>
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardItem;

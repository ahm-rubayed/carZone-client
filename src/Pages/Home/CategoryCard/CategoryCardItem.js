import React from "react";

const CategoryCardItem = ({ car, setProducts }) => {
  const { img, name, location, resale, original, used, time } = car;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Location: {location}</p>
        <p>Resale price: ${resale}</p>
        <p>Original Price: ${original}</p>
        <p>Years of use: {used}</p>
        <p>Time: {time}</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="order-modal"
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

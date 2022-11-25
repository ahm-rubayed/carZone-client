import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import CategoryCardItem from "./CategoryCardItem";

const CategoryCard = () => {
  const [products, setProducts] = useState(null);
  const data = useLoaderData();

  const cars = data.cars;
  console.log(products);

  return (
    <section>
      <div className="grid grid-cols-3 pt-32 mb-16 justify-items-center">
        {cars.map((car) => (
          <CategoryCardItem
            car={car}
            setProducts={setProducts}
          ></CategoryCardItem>
        ))}
      </div>
      {products && <BookingModal products={products}></BookingModal>}
    </section>
  );
};

export default CategoryCard;

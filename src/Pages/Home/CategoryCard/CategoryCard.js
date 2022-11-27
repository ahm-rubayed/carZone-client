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
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-32 mb-16 justify-items-center">
        {cars.map((car) => (
          <CategoryCardItem
            car={car}
            setProducts={setProducts}
          ></CategoryCardItem>
        ))}
      </div>
      {products && <BookingModal products={products} setProducts={setProducts}></BookingModal>}
    </section>
  );
};

export default CategoryCard;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCardItem from './CategoryCardItem';

const CategoryCard = () => {
    const data = useLoaderData()
    const cars = data.cars;

    return (
        <div className='grid grid-cols-3 my-16 justify-items-center'>
            {cars.map(car => <CategoryCardItem car={car}></CategoryCardItem>)}
        </div>
    );
};

export default CategoryCard;
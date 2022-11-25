import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleAddProduct = data => {
        console.log(data)

        const product = {
            name: data.name, 
            price: data.price,
            number: data.number,
            location: data.location,
            purchase: data.purchase,
            condition: data.condition
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            toast.success(`${data.name} is added successfully`);
            navigate('/dashboard/myproduct')
        })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs mt-8">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-1">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-1">
                    <label className="label"> <span className="label-text">Number</span></label>
                    <input type="number" {...register("number", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-1">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="location" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-1">
                    <label className="label"> <span className="label-text">Year of purchase</span></label>
                    <input type="purchase" {...register("purchase", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchase && <p className='text-red-500'>{errors.purchase.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mt-1">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select 
                    {...register('Condition')}
                    className="select input-bordered w-full max-w-xs">      
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    </select>
                </div>
                <input className='btn btn-primary text-white w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
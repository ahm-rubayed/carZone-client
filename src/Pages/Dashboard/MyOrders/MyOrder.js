import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OrderItem from './OrderItem';

const MyOrder = () => {
    const {
        data: orders = [], refetch,} = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
          try {
            const res = await fetch("https://carzone-server-ahm-rubayed.vercel.app/orders", {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
          } catch (error) {}
        },
      })

      console.log(orders)
      
    return (
        <div className='px-16 pt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12 justify-items-center'>
                {
                    Array.from(orders).map((order) => <OrderItem
                     key={order._id}
                     order={order}
                    ></OrderItem>)
                }
            </div>
        </div>
    );
};

export default MyOrder;
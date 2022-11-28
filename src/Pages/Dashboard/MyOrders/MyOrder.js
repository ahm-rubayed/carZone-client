import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OrderItem from './OrderItem';

const MyOrder = () => {
    const {
        data: orders, refetch,} = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
          try {
            const res = await fetch("http://localhost:5000/orders");
            const data = await res.json();
            return data;
          } catch (error) {}
        },
      });

      console.log(orders)
    return (
        <section className='px-16 pt-12'>
            <div>
                {
                    orders?.map(order => <OrderItem
                     key={order._id}
                     order={order}
                    ></OrderItem>)
                }
            </div>
        </section>
    );
};

export default MyOrder;
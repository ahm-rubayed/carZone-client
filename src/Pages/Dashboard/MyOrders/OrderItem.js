import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  const { img, userName, productName, price } = order;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img src={img} alt="order product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>
            Price: $<span className="text-primary font-semibold">{price}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {" "}
              {order.price && !order.paid && (
                <Link to={`/dashboard/payment/${order._id}`}>
                  <button className="btn btn-primary text-white btn-sm">
                    Pay
                  </button>
                </Link>
              )}
              {order.price && order.paid && (
                <span className="text-blue-500">Sold</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

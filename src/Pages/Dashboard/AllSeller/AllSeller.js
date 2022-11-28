import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("https://carzone-server-ahm-rubayed.vercel.app/seller", {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = id => {
    fetch(`https://carzone-server-ahm-rubayed.vercel.app/seller/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Seller deleted successfully`)
        }
    })
}

  return (
    <div className="px-12">
      <h2 className="text-3xl mb-6">All sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteSeller(user._id)} className="btn btn-xs btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;

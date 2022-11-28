import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch("https://carzone-server-ahm-rubayed.vercel.app/buyer", {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      });
      const data = await res.json();
      return data;
    },
  });

  console.log(buyers)

  const handleDeleteBuyer = id => {
    fetch(`https://carzone-server-ahm-rubayed.vercel.app/buyer/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Buyer deleted successfully`)
        }
    })
}

  return (
    <div className="px-12">
      <h2 className="text-3xl mb-6">All Buyers</h2>
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
            {buyers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteBuyer(user._id)} className="btn btn-xs btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;

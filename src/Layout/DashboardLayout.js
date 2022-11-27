import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile pt-16">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"/>
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isSeller && (
              <>
                <li><Link to="/dashboard/myproduct">My Products</Link></li>
                <li><Link to="/dashboard/addproduct">Add a product</Link></li>
              </>
            )}
            {isBuyer && (
              <>
                <li><Link to="/dashboard/orders">My Orders</Link></li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

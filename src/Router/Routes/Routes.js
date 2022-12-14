import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/MyOrders/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorRoute from "../../Pages/ErrorRoute/ErrorRoute";
import CategoryCard from "../../Pages/Home/CategoryCard/CategoryCard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://carzone-server-ahm-rubayed.vercel.app/category/${params.id}`),
        element: (
          <PrivateRoute>
            <CategoryCard></CategoryCard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/orders",
          element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: "/dashboard/addproduct",
        element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
      },
      {
        path: "/dashboard/allbuyer",
        element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
      },
      {
        path: "/dashboard/allseller",
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://carzone-server-ahm-rubayed.vercel.app/orders/${params.id}`)
      }
    ],
  },
  {
    path: "*",
    element: <ErrorRoute></ErrorRoute>,
  },
]);

export default router;

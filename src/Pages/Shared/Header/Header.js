import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(err => console.log(err));
  }
    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 fixed w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content 
          mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/'>
            <img src={logo} alt="" className="w-32" />
        </Link>
      </div>
      <div className="navbar-end">
      {user?.uid ?
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="profile" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/dashboard'} className="justify-between">
            Dashboard
            <span className="badge">New</span>
          </Link>
        </li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </ul>
    </div>
    :
    <Link to='/login' className="uppercase font-semibold">Login</Link>
    }
    </div>
    </div>
  );
};

export default Header;

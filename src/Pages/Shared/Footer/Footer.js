import React from "react";
import logo2 from "../../../assets/logo.png";
import { FaTwitter, FaFacebook, FaYoutube  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="px-12 lg:px-40 pt-16 pb-7 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:justify-self-end">
        <img src={logo2} alt="" />
        <p className="my-6">
          Duis aute irure dolor inasfa reprehenderit in voluptate velit esse
          cillum reeut cupidatatfug.
        </p>
        <span className="block myColor text-4xl">012 345 678</span>
        <small className="mt-4 block myColor">contactcarzone@gmail.com</small>
      </div>
      <div className="lg:justify-self-end">
        <span className="text-2xl myColor">USEFUL LINKS</span>
        <ul>
            <li className="my-3">Latest Cars</li>
            <li className="my-3">Upcoming Cars</li>
            <li className="my-3">Car Sell</li>
            <li className="my-3">Car Review</li>
        </ul>
      </div>
      <div className="lg:justify-self-end">
        <ul className="flex gap-4">
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaTwitter/></li>
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaFacebook/></li>
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaYoutube/></li>
        </ul>
      </div>
        </div>
      <p className="text-center mt-12">Copyright ©2022 All rights reserved | This template is made with by Rubayed Ahmed</p>
    </div>
  );
};

export default Footer;
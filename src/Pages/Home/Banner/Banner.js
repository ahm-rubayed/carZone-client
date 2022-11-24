import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <div className="text-white pt-40 md:pt-32 px-16 text- md:absolute md:top-1/3 md:left-1/3 md:-translate-x-2/4 md:-translate-y-2/4">
            <small className="text-lg uppercase">Special offer</small>
          <h1 className="text-6xl font-semibold leading-tight ">
            Buy the best car today
          </h1>
          <p className="text-slate-300 mt-4">
            Authentic, vibrant, honest—this is how photographer Rocco describes
            his wedding photography. The Swiss photographer has photographed
            ‘the happiest day’ in many couple’s lives for ten years now. It’s
            particularly important to him to capture the intense emotions which
            make this day so unique and personal.
          </p>
          <button className="mt-6 border py-2 px-5 explore-btn relative"><Link to="/services">Order Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
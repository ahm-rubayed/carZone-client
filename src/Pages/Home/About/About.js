import React from "react";
import { Link } from "react-router-dom";
import car from "../../../assets/aboutcar.png";
// import useTitle from "../../../hooks/useTitle";
import "./About.css";

const About = () => {
  return (
    <div className="p-16 mx-auto my-28 about">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
        <div>
          <h2 className="text-xl font-semibold">KNOW MORE ABOUT US</h2>
          <p className="text-5xl font-bold my-6 w-4/5">
          WhoCars Dealers are
          </p>
          <p className="text-lg w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className=" mt-8 border-2 py-2 px-5 text-white btn-primary rounded">
            <Link>Buy Cars</Link>
          </button>
        </div>
        <div className="mt-6">
          <img src={car} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;

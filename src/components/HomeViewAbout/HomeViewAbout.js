import React from "react";
import { Link } from "react-router-dom";

const HomeViewAbout = () => {
  return (
    <div className="homeViewAbout">
      <div className="homeViewAbout__wrapper container">
        <div className="homeViewAbout__wrapper--image" />
        <div className="homeViewAbout__wrapper--text">
          <h1 className="section-title">
            We create honest jewelry that last a lifetime.
          </h1>
          <Link to="/" className="btn btn-brown">
            Get to know us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeViewAbout;

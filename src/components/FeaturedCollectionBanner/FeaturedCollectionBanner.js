import React from "react";
import { Link } from "react-router-dom";

const FeaturedCollectionBanner = () => {
  return (
    <div className="featuredCollectionBanner">
      <div className="featuredCollectionBanner__wrapper container">
        <h4 className="subtitle">New in:</h4>
        <h1 className="section-title">Fall Collection</h1>
        <p>
          Jewelry that match your every mood. Whether you're inside, hiding from
          the rain or outside enjoying a sunny fall day, we've got you covered
          with our new fall collection.
        </p>
        <Link to="/" className="btn btn-brown">
          Check it out
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCollectionBanner;

import React from "react";
import { Link } from "react-router-dom";
import minimal from "../../assets/images/header.jpg";
import chunky from "../../assets/images/chunky-collection.jpg";
import romantic from "../../assets/images/aboutimage.jpg";

const collections = [
  {
    title: "Minimal Collection",
    slug: "/collections/minimal",
    image: minimal,
  },
  {
    title: "Chunky Collection",
    slug: "/collections/minimal",
    image: chunky,
  },
  {
    title: "Romantic Soul Collection",
    slug: "/collections/minimal",
    image: romantic,
  },
];

const HomeViewCollections = () => {
  return (
    <div className="homeViewCollections">
      <div className="homeViewCollections__wrapper container">
        {collections &&
          collections.map((item, i) => (
            <Link
              key={i}
              to="/"
              className="homeViewCollections__wrapper--item"
            >
              <img src={item.image} alt={`Breeze Boutique's ${item.title}`} />
              <div className="bg-overlay" />
              <h1>
                {item.title.split(" Collection")[0]}
                <span>Collection</span>
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomeViewCollections;

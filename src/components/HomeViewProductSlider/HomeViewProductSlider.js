import React from "react";

import { CollectionSlider } from "config/C4";

import image1 from "../../assets/images/slider01.jpg";
import image2 from "../../assets/images/slider02.jpg";
import image3 from "../../assets/images/slider03.jpg";
import image4 from "../../assets/images/slider04.jpg";

const sliderData = [
  {
    image: image1,
    text: "Lorem ipsum",
    link: "/image1",
  },
  {
    image: image2,
    text: "Lorem ipsum",
    link: "/image2",
  },
  {
    image: image3,
    text: "Lorem ipsum",
    link: "/image3",
  },
  {
    image: image4,
    text: "Lorem ipsum",
    link: "/image4",
  },
];

const HomeViewProductSlider = () => {
  return (
    <div className="homeViewProductSlider">
      <div className="overlaybox" />
      <div className="homeViewProductSlider__wrapper">
        <CollectionSlider data={sliderData} />
      </div>
    </div>
  );
};

export default HomeViewProductSlider;

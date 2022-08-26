import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionSlider = (props) => {
  const { data } = props;

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    // centerMode: true,
  };

  return (
    <div className="collectionSlider">
      <Slider {...settings}>
        {data &&
          data.map((item, i) => (
            <div key={i} className="collectionSlider__item">
              <img src={item.image} alt={item.name} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CollectionSlider;

import React from "react";

const newInProducts = [
  {
    title: "Earrings gold",
    price: 59,
    image: "newIn01.jpg",
  },
  {
    title: "Necklaces - set of 2",
    price: 79,
    image: "newIn02.jpg",
  },
  {
    title: "Gold plated ring with small rock",
    price: 110,
    image: "newIn03.jpg",
  },
  {
    title: "Necklace gold",
    price: 39,
    image: "newIn04.jpg",
  },
  {
    title: "Necklaces - set of 3",
    price: 99,
    image: "newIn05.jpg",
  },
  {
    title: "Earrings gold",
    price: 69,
    image: "newIn06.jpg",
  },
  {
    title: "Earrings gold",
    price: 49,
    image: "newIn07.jpg",
  },
  {
    title: "Earrings gold",
    price: 75,
    image: "newIn08.jpg",
  },
];

const HomeViewNewIn = () => {
  return (
    <div className="homeViewNewIn">
      <h1 className="section-title">New In</h1>
      <div className="homeViewNewIn__grid container">
        {newInProducts.map((item, i) => (
          <div className="homeViewNewIn__grid--item">
            <img src={require(`../../assets/images/${item.image}`).default} alt="" width="300" height="300"/>
            <p className="title">{item.title}</p>
            <p className="price">$<span>{item.price}</span></p>
          </div>
        ))}
      </div>
      <div className="btn-wrapper">
        <div className="btn btn-brown">Shop Now</div>
      </div>
    </div>
  );
};

export default HomeViewNewIn;

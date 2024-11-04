import React from "react";
import "./carousel.css";

const Carousel = ({ data }) => {
  return (
    <div className="carousel-root">
      <img src={data.img} className="carousel-image" alt="carousel" />
      <div className="carousel-base">
        <div className="caraousel-quote">{data.quote}</div>
        <div className="carousel-company">
          <h3>{data.name}</h3>
          <h4>{data.address}</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client7.png"
import client2 from "../assets/client8.png"
import client3 from "../assets/client9.png"
import client4 from "../assets/client10.png"

function SlideImage() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container ">
      <Slider {...settings} >
     
      <div className="mx-2">
          <img src={client1} alt="" />
        </div>
        <div className="mx-2">
         <img src={client2} alt="" />
        </div>
        <div className="mx-2">
          <img src={client3} alt="" />
        </div>
        <div className="mx-2">
          <img src={client4} alt="" />
        </div>
        <div className="mx-2">
        <img src={client1} alt="" />
        </div>
        <div className="mx-2">
        <img src={client2} alt="" />
        </div>
  
        
      </Slider>
    </div>
  );
}

export default SlideImage;
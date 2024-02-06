import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/ban.webp";
import one from "./images/banner.jpg";
import two from "./images/bannerOne.webp";

function DemoTwo() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div>
      <div className="bd-example">
        <Carousel breakPoints={breakPoints}>
          <div>
            <img
              className="d-block w-100 image-rating1"
              src={img}
              alt="First slide"
            />
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div>
            <img
              className="d-block w-100 image-rating1"
              src={one}
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <img
              className="d-block w-100 image-rating1"
              src={two}
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          {/* Add two more divs for the remaining two cards */}
        </Carousel>
      </div>
    </div>
  );
}

export default DemoTwo;

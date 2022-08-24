import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { shop } from '../../constants/routeConstant';

import "./commonBanner.css"
function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="slider"
          src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659706332/banner-bg_ssio5b.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         <Link to={shop}><Button variant="secondary">SHOP NOW</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659706009/banner3_xpbzjw.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to={shop}><Button variant="secondary">SHOP NOW</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659706009/banner5_kcugxx.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to={shop}><Button variant="secondary">SHOP NOW</Button></Link>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;


// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class Banner extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
      
//         <Slider {...settings}>
//           <div>
//             <img src="assets/sliderimgs/model.jpg" alt=""  className="slider"/>
//           </div>
//           <div>
//             <img src="assets/sliderimgs/model.jpg" alt=""  className="slider"/>
//           </div>
//           <div> 
//             <img src="assets/sliderimgs/model.jpg" alt=""  className="slider"/>
//           </div>
//           <div>
//             <img src="assets/sliderimgs/model.jpg" alt=""  className="slider"/>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
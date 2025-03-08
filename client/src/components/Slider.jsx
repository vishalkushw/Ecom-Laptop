import React from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from "../images/laptop1.jpg";
import ban2 from "../images/laptop 2.avif";
import ban3 from "../images/laptop3.webp";
const Slider = () => {
  return (
    <>
      <Carousel>
                <Carousel.Item>
                    <img src={ban1} width="100%" height="300" /> 
                    <Carousel.Caption>
                        <h3>Best laptop</h3>
                        <p>Best laptop for You</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban2} width="100%" height="300" />
                    <Carousel.Caption>
                        <h3>EMI Base</h3>
                        <p>Easy EMI and 0 % interates rate.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban3} width="100%" height="300" />
                    <Carousel.Caption>
                        <h3>Super saver deals</h3>
                        <p>
                            You buy laptop insuper saver deals coming.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    
    </>
 
  );
};

export default Slider;
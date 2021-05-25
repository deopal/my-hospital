import React,{useState} from 'react';

import slider_1 from "../../assets/images/slider/slider_1.jpg";
import slider_2 from "../../assets/images/slider/slider_2.jpg";
import slider_3 from "../../assets/images/slider/slider_3.jpg";

import {Carousel,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

        function Carousel_content() {
            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
                
                <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 h-100">
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src={slider_1}
                      alt="First slide"
                    />
                    <Carousel.Caption className=" p-2" style={{color:'grey'}}>
                      <h3 style={{textDecoration:'underline'}}>Pneumonia Treatment and Recovery </h3>
                      <p>Hospital-acquired pneumonia is an infection of the lungs that occurs during a hospital stay.
                         This type of pneumonia can be very severe. Sometimes, it can be fatal.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item >
                    <Image
                      className="d-block w-100"
                      src={slider_2}
                      alt="Second slide"
                    />
            
                    <Carousel.Caption className=" p-2 " style={{color:'grey'}}>
                      <h3 style={{textDecoration:'underline'}}>Best medical facilities</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,  <br />
                        aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                         sed sagittis at, sagittis quis neque. Praesent</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src={slider_3}
                      alt="Third slide"
                    />
            
                    <Carousel.Caption className=" p-2" style={{color:'grey'}}>
                      <h3 style={{textDecoration:'underline'}}>Best medical facilities</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,  <br />
                        aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                         sed sagittis at, sagittis quis neque. Praesent
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              );
          }

          export default Carousel_content;
  
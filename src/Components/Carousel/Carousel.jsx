import './Carousel.css'
import Image1 from "../../assets/image11.JPG";
import Image2 from "../../assets/Image22.JPG";
import Image3 from "../../assets/image33.JPG";
import Image4 from "../../assets/image44.JPG";

import Carousel from "react-bootstrap/Carousel";
import SLIDER_IMAGES from "./images.js"


const MyCarousel =()=>{
    return(
        <div className='af-height-90 af-max-width mx-auto mt-2'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Image4}
              alt='First slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[0].title}</h3>
                <p>{SLIDER_IMAGES[0].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Image2}
              alt='Third slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[1].title}</h3>
                <p>{SLIDER_IMAGES[1].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Image3}
              alt='Third slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[2].title}</h3>
                <p>{SLIDER_IMAGES[2].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
};
export default MyCarousel;
import React from 'react'
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';

//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';

const Carousoldot = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        }
      };

    return (
        <Slider {...settings}>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
            <div>
            <h3>7</h3>
            </div>
            <div>
            <h3>8</h3>
            </div>
        </Slider>
    )
}

export default Carousoldot
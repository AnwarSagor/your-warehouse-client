import './HomePage.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../src/images/banner/banner1.jpeg'
import banner2 from '../../../src/images/banner/banner2.jpeg'
import banner3 from '../../../src/images/banner/banner3.jpeg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div class="banner-img">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div class="banner-img">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div class="banner-img">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </div>

            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
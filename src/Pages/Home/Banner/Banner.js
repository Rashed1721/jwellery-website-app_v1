import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../../images/logo1.jpg'
import Banner1 from '../../../images/banner1.jpg'
import Banner2 from '../../../images/banner2.png'
import Banner3 from '../../../images/banner3.jpg'

const Banner = () => {

    return (

        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-500"
                        height={500}
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-500"
                        height={500}
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        height={500}
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Banner;
import React from "react";
import { Carousel } from "react-bootstrap";
import photo5 from "../photos/photo5.jpg"
import photo4 from "../photos/photo4.jpg"
import photo3 from "../photos/photo3.jpg"
import "./Carousel.css"

function Home () {
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="slide"
                src={photo5}
                alt="First slide"
                />
                <Carousel.Caption className="caption">
                <div className="caption-title"><p>Welcome</p></div>
                <div className="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="slide"
                src={photo4}
                alt="Second slide"
                />
                <Carousel.Caption className="caption">
                <div className="caption-title">Info</div>
                <div className="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="slide"
                src={photo3}
                alt="Third slide"
                />
                <Carousel.Caption className="caption">
                <div className="caption-title">What's Your Next Project</div>
                <div className="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;
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
                class="slide"
                img src={photo5}
                alt="First slide"
                />
                <Carousel.Caption class="caption">
                <div class="caption-title"><p>Welcome</p></div>
                <div class="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                class="slide"
                img src={photo4}
                alt="Second slide"
                />
                <Carousel.Caption class="caption">
                <div class="caption-title">Info</div>
                <div class="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                class="slide"
                img src={photo3}
                alt="Third slide"
                />
                <Carousel.Caption class="caption">
                <div class="caption-title">What's Your Next Project</div>
                <div class="caption-p"><p>This is a test</p></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;
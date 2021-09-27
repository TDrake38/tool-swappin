import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../photos/photo1.jpg"
import photo2 from "../photos/photo2.jpg"
import photo3 from "../photos/photo3.jpg"

function Home () {
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                img src={photo1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                img src={photo2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                img src={photo3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;
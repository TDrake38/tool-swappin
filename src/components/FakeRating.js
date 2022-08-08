import React from "react";
import StarE from "../photos/StarE.png";
import StarF from "../photos/StarF.png";
import { Image } from "react-bootstrap";

function Rating() {
  return (
    <>
      <Image src={StarF} alt="empty star" />
      <Image src={StarE} alt="empty star" />
      <Image src={StarE} alt="empty star" />
      <Image src={StarE} alt="empty star" />
    </>
  );
}

export default Rating;

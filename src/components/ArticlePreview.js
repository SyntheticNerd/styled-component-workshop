import React, { useState } from "react";
import AboutWriter from "./AboutWriter";
import {
  ArticlePrev,
  Container,
  MainImg,
} from "./StyledComponents";

export default function ArticlePreview() {
  

  return (
    <Container>
      <MainImg
        src={process.env.PUBLIC_URL + "/images/drawers.jpg"}
        alt='Drawers'
      />
      <ArticlePrev>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <AboutWriter/>
      </ArticlePrev>
    </Container>
  );
}

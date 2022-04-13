import React, { useState } from "react";
import {
  ArticlePrev,
  Container,
  MainImg,
  ShareModal,
  Writer,
} from "./StyledComponents";

export default function ArticlePreview() {
  const [toggle, setToggle] = useState(false);
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
        <Writer>
          <img
            src={process.env.PUBLIC_URL + "/images/avatar-michelle.jpg"}
            alt='Avatar'
          />
          <div>
            <strong>Michelle Appleton</strong>
            <p>28 Jun 2020</p>
          </div>
          <ShareModal toggle={toggle}>
            <p>SHARE</p>
            <img
              src={process.env.PUBLIC_URL + "/images/icon-facebook.svg"}
              alt='Facebook'
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-pinterest.svg"}
              alt='Pinterest'
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-twitter.svg"}
              alt='Twitter'
            />
          </ShareModal>
          <button
            onClick={() => {
              console.log(toggle);
              setToggle(!toggle);
            }}
          ></button>
        </Writer>
      </ArticlePrev>
    </Container>
  );
}

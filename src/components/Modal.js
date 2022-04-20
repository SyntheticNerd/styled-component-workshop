import React from "react";
import { SharedModal } from "./StyledComponents";
export default function Modal({ toggle }) {
  return (
    <SharedModal toggle={toggle}>
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
    </SharedModal>
  );
}

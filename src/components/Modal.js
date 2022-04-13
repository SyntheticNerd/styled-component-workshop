import React from "react";

export default function Modal({ toggle }) {
  return (
    <div style={toggle ? { display: "block" } : { display: "none" }}>
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
    </div>
  );
}

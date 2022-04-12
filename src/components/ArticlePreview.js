import React, { useState } from "react";

export default function ArticlePreview() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/images/drawers.jpg"} alt='Drawers' />
      <div>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/avatar-michelle.jpg"}
            alt='Avatar'
          />
          <div>
            <strong>Michelle Appleton</strong>
            <p>28 Jun 2020</p>
          </div>
          <div>
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
          <button
            onClick={() => {
              console.log(toggle);
              setToggle(!toggle);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/icon-share.svg"}
              alt='Share'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

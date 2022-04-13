import React, { useState } from 'react'

export default function AboutWriter() {
    const [toggle, setToggle] = useState(false);
  return (
    <div>
    <img
      src={process.env.PUBLIC_URL + "/images/avatar-michelle.jpg"}
      alt='Avatar'
    />
    <div>
      <strong>Michelle Appleton</strong>
      <p>28 Jun 2020</p>
    </div>
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
    <button
      onFocusCapture={() => {
        console.log(toggle);
        setToggle(!toggle);
      }}
      onBlur={() => {
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
  )
}

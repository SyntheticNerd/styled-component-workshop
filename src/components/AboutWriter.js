import React, { useState } from 'react'
import { ShareBtn, ShareModal, Writer } from './StyledComponents';

export default function AboutWriter() {
    const [toggle, setToggle] = useState(false);
  return (
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
    <ShareBtn
      onFocusCapture={() => {
        console.log(toggle);
        setToggle(!toggle);
      }}
      onBlur={() => {
        console.log(toggle);
        setToggle(!toggle);
      }}
    ></ShareBtn>
  </Writer>
  )
}

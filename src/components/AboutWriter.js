import React, { useState } from "react";
import Btn from "./Btn";
import Modal from "./Modal";

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
      <Modal toggle={toggle}/>
      <Btn toggle={toggle} setToggle={setToggle}/>
    </div>
  );
}

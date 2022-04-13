import React, { useState } from "react";
import Btn from "./Btn";
import Modal from "./Modal";
import { Writer } from "./StyledComponents";

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
      <Modal toggle={toggle}/>
      <Btn toggle={toggle} setToggle={setToggle}/>
    </Writer>
  );
}

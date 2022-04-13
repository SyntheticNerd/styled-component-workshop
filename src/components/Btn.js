import React from "react";
import { ShareBtn } from "./StyledComponents";

export default function Btn({ toggle, setToggle }) {
  return (
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
  );
}

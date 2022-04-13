import React from 'react'

export default function Btn({ toggle, setToggle }) {
  return (
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
  )
}

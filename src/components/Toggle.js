import React, { useState } from "react";

function Toggle() {
  //setup initial state
  const [isOn, setIsOn] = useState (false)

  //trigger an update by adding a callback function
  function handleClick () {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";

  return (
    //styling the button
  <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  )
}
export default Toggle;

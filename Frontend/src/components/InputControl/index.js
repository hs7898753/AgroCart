import React from "react";

import "./index.css";

function InputControl(props) {
  return (
    <div className="inputcontrolcontainer">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
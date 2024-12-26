import React from "react";

const Button = (props) => {
  return <button style={{background: props.background, color: props.color, height: props.height, width: props.width }}>{props.label}</button>;
};

export default Button;
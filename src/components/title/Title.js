import React from "react";
import "./title.sass";
export default function Title(props) {
const style = {
  fontSize:  `${props.size}px` //default measurement is in px
}

  return (
    <div className="Title" style={style}>
      <span>U</span>
      <span>i</span>
      <span>n</span>
      <span>i</span>
      <span>m</span>
      <span>a</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
      <span>s</span>
    </div>
  );
}

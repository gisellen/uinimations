import React from "react";
import "./Input.sass";
export default function Input() {
  return (
    <div className="input-group">
      <input type="text" className="input" required autoComplete="off" />
      <label for="name">Name</label>
    </div>
  );
}

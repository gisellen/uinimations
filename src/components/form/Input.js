import React from "react";
import "./Input.sass";
export default function Input() {
  return (
    <div class="input-group">
      <input type="text" className="input" required autocomplete="off" />
      <label for="name">Name</label>
    </div>
  );
}

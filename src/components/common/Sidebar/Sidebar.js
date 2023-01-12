import React from "react";
import "./Sidebar.sass";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="header">
        <a className="header-link" href="/">UINIMATIONS</a> {/* change into a logo in the future*/}
      </h1>
      <div className="sidebar-group">
        <a className="sidebar-link" href="/Inputs">
          Inputs
        </a>
        <a className="sidebar-link" href="/Buttons">
          Buttons
        </a>
      </div>
    </div>
  );
}

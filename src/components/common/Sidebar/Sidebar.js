import React from "react";
import Title from '../../title/Title.js'
import './Sidebar.sass'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <Title />
      </div>
      <div className="sidebar-group">
      <a className="sidebar-link" href="/Inputs">Inputs</a>
      <a className="sidebar-link" href="/Buttons">Buttons</a>
      </div>
    </div>
  );
}


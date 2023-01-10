import React from "react";
import "./Footer.sass";

import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: '2em' }}>
    <div className="footer">
     
        <a href='https://github.com/gisellen/uinimations' className="icon-links"><AiFillGithub /></a>
      
    </div>
    </IconContext.Provider>
  );
}

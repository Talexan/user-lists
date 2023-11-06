import "./style.css";
import React from "react";

const Header = ({ title }) => {
  return (
    <header className="user-list__header">
      <h1 className="title-1">{title}</h1>
    </header>
  );
};

export default Header;

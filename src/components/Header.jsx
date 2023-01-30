import React, { useState } from "react";
import logo from "./../img/logo-header.png";
import Nav from "./Nav";
import Button from "./UI/Button";
import Input from "./UI/Input";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <a href="#!" className="header__logo">
            <img src={logo} alt="Logo" />
          </a>
          <Nav />
        </div>
        <div className="header__search-box search-box">
          <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Button>Найти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

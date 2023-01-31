import React from "react";
import logo from "./../img/logo-header.png";
import Nav from "./Nav";
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
          <button className="search-box__btn btn">Найти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

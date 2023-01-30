import React from "react";

const navs = [
  { id: 1, name: "Каталог", href: "#!" },
  { id: 2, name: "Доставка", href: "#!" },
  { id: 3, name: "Оплата", href: "#!" },
  { id: 4, name: "Контакты", href: "#!" },
  { id: 5, name: "О галерее", href: "#!" },
];

const Nav = () => {
  return (
    <ul className="header__menu menu">
      {navs.map((nav) => (
        <li key={nav.id} className="menu__item">
          <a href={nav.href} className="menu__link">
            {nav.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;

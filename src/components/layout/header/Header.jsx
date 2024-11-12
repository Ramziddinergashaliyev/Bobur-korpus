import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import rasm from "../../../assets/images/logo.jfif";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav container">
        <NavLink to={"/"} className="header__nav__logo">
          <img src={rasm} alt="Logo" />
          <h2>
            Bobur <br /> <span>Korpusi</span>
          </h2>
        </NavLink>
        <ul className={`header__nav__list ${show ? "header__show" : ""}`}>
          <button onClick={() => setShow(false)} className="header__nav__close">
            <IoCloseSharp />
          </button>
          <li className="header__nav__item">
            <NavLink onClick={() => setShow(false)} to={"/"}>
              Bosh Sahifa
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink onClick={() => setShow(false)} to={"/about"}>
              Muallif haqida
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink onClick={() => setShow(false)} to={"/blog"}>
              Boburnoma
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink onClick={() => setShow(false)} to={"/devon"}>
              Bobur Devoni
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink onClick={() => setShow(false)} to={"/contact"}>
              Biz bilan Aloqa
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setShow(true)} className="header__nav__btn">
          <RxHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;

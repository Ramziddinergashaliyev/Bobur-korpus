import React from "react";
import "./footer.scss";
import rasm from "../../../assets/images/logo.jfif";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box container">
        <div>
          <NavLink to={"/"} className="footer__logo">
            <img src={rasm} alt="Logo" />
            <h2>
              Bobur <br /> <span>Korpusi</span>
            </h2>
          </NavLink>
        </div>
        <ul className="footer__list">
          <h3>Home</h3>
          <li className="footer__item">
            <NavLink to={"#"}>Bosh Sahifa</NavLink>
          </li>
          <li className="footer__item">
            <a href="#">Hero</a>
          </li>
          <li className="footer__item">
            <a href="#">Global</a>
          </li>
          <li className="footer__item">
            <a href="#">Video</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3>About</h3>
          <li className="footer__item">
            <NavLink to={"/about"}> Muallif Haqida</NavLink>
          </li>
          <li className="footer__item">
            <NavLink to={"/blog"}>Boburnoma</NavLink>{" "}
          </li>
          <li className="footer__item">
            <NavLink to={"/devon"}>Bobur Devoni</NavLink>{" "}
          </li>
          <li className="footer__item">
            <NavLink to={"/contact"}>Biz bilan aloqa</NavLink>{" "}
          </li>
        </ul>
        <ul className="footer__list">
          <h3>Contact</h3>

          <li className="footer__item footer__item-user">
            <FaUser />
            <p>Nilufar Muradova</p>
          </li>
          <li className="footer__item footer__item-phone">
            <FaPhone />
            <a href="tel: +998935747600">+998935747600</a>
          </li>
          <li className="footer__item footer__item-user">
            <FaTelegram />
            <p>Telagram</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./hero.scss";
import img from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__box container">
        <div className="hero__info">
          <h2>Zahiriddin Muhammad Bobur ibn Umarshayx Mirzo</h2>
          <span>
            “Jahon tarixida o‘chmas iz qoldirgan betakror siymolardan biri
            Zahiriddin Muhammad Bobur buyuk shoir, qomusiy olim, davlat arbobi
            va mohir sarkarda sifatida butun dunyoda ma’lum va mashhurdir. Uning
            beqiyos ilmiy-ijodiy merosi nafaqat milliy madaniyatimiz va xalqimiz
            adabiy-estetik tafakkurining shakllanishida, balki jahon adabiyoti,
            ilm-fani va davlatchiligi tarixida alohida o‘ringa ega” —
            <h3>
              O‘zbekiston Respublikasi Prezidenti Shavkat Miromonovich
              Mirziyoyev
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

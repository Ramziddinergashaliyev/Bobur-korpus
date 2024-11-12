import React from "react";
import "./global.scss";
import img1 from "../../assets/images/hero.jpg";

const Global = () => {
  return (
    <div className="global">
      <div className="global__box container">
        <div className="global__left">
          <img src={img1} alt="" />
        </div>
        <div className="global__right">
          <h2>TAVALLUDI</h2>
          <p>
            Tug‘ilgan vaqti – 14 fevral 1483-yil Andijon shahri. Hijriy sakkiz
            yuz sakson sakkizinchi yil, muharram oyining oltinchisi (Xondamir,
            Mirza Muhammad Haydar). Ushbu sanani Ulug‘bek Kobuliyning olimi
            Mavlono Munir Marg‘iloniy uning tug‘ilgan tarixini “Shashi Muharram”
            (muharram oyining oltinchisi) so‘zlari qiymati yig‘indisidan topgan.
          </p>
          <h2 className="global__right__title">ISM VA TAXALLUSI</h2>
          <p>
            Unga buyuk naqshbandiy pir Xoja Ahror Valiy (Eshon Ubaydullaxon)
            tomonidan Zahiriddin Muhammad ismi qo‘yilgan. Oilada go‘dakligidan
            Bobur, Boburjon deb erkalatishgan va bu unga ham ism ham taxallus
            bo‘lib, Zahiriddin Muhammad Bobur, Bobur Mirzo, Bobur podshoh
            sifatida tarixiy manbalarda va ilmiy adabiyotlarda qo‘llaniladi.
            Boburiylar uni oilada “Firdavs makoniy” deb atashgan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Global;
